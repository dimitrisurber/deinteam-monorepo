import React from 'react';

export type FAQAccordionVariant = 'single_column' | 'two_column';

export interface FAQAccordionProps {
  /** Markdown rendered as JSX. Each `**Question?**` paragraph starts a new
   *  Q/A pair; following paragraphs (until the next bolded paragraph) are
   *  the answer. */
  children?: React.ReactNode;
  variant?: FAQAccordionVariant;
  /** Optional section heading shown above the accordion. */
  heading?: string;
  /** Optional intro paragraph below the heading. */
  intro?: string;
}

/**
 * FAQAccordion — collapsible Q/A list for the closing FAQ block of an
 * article. Designed for the `:::faq` markdown directive, where editors
 * write natural markdown:
 *
 *   :::faq
 *
 *   **Brauche ich eine Überweisung?**
 *   Nein. Du kannst direkt einen Termin buchen.
 *
 *   **Übernimmt die Krankenkasse die Kosten?**
 *   Bei medizinischer Indikation ja. ...
 *
 *   :::
 *
 * The component walks its rendered children, finds <p> elements whose
 * first child is <strong>, treats those as the question, and groups
 * following <p>s as the answer. Renders as native HTML5 <details>/<summary>
 * for accessibility and zero-JS expand/collapse.
 *
 * Why parse children instead of taking items as a prop: directive bodies
 * are markdown, not structured data. Parsing here keeps the editor
 * experience natural.
 */
export function FAQAccordion({
  children,
  variant = 'single_column',
  heading,
  intro,
}: FAQAccordionProps): React.JSX.Element {
  const items = parseFAQItems(children);

  return (
    <section className={`dt-faq dt-faq--${variant}`}>
      {(heading || intro) && (
        <header className="dt-faq__header">
          {heading && <h3 className="dt-faq__headline">{heading}</h3>}
          {intro && <p className="dt-faq__intro">{intro}</p>}
        </header>
      )}
      <ul className="dt-faq__list">
        {items.map((item, i) => (
          <li key={i} className="dt-faq__item">
            <details>
              <summary>{item.question}</summary>
              <div className="dt-faq__answer">{item.answer}</div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

interface FAQItem {
  question: React.ReactNode;
  answer: React.ReactNode[];
}

/**
 * Returns the inner children of a React element regardless of whether the
 * element's `type` is a string (`'p'`) or a custom component. This is the
 * critical point: when react-markdown is configured with a `components.p`
 * override (the labs review page does this for styling), the child elements
 * passed to FAQAccordion have `type` equal to the override's function ref,
 * not the string `'p'`. Gating on `type === 'p'` finds nothing.
 *
 * Instead, we treat any valid element with children as a candidate paragraph
 * and decide question-vs-answer by whether its first inner is a <strong>.
 */
function getInnerChildren(node: unknown): React.ReactNode[] | null {
  if (!React.isValidElement(node)) return null;
  const props = node.props as { children?: React.ReactNode } | undefined;
  if (props?.children == null) return null;
  return React.Children.toArray(props.children);
}

function isStrongElement(node: unknown): node is React.ReactElement<{ children?: React.ReactNode }> {
  // <strong> has no override in our review preview, so `type === 'strong'`
  // is reliable. If a future override is added, mirror getInnerChildren's
  // type-agnostic strategy here too.
  return (
    React.isValidElement(node)
    && typeof node.type === 'string'
    && node.type.toLowerCase() === 'strong'
  );
}

function parseFAQItems(children: React.ReactNode): FAQItem[] {
  const items: FAQItem[] = [];
  let current: FAQItem | null = null;

  React.Children.forEach(children, (child) => {
    const inner = getInnerChildren(child);
    if (inner == null || inner.length === 0) {
      // Whitespace text node, fragment, or element with no children — skip.
      return;
    }
    const first = inner[0];
    if (isStrongElement(first)) {
      // New Q/A pair. The <strong>'s children are the question label.
      if (current) items.push(current);
      const firstProps = first.props as { children?: React.ReactNode };
      current = { question: firstProps.children, answer: [] };
      // If there's content after the <strong> in the same paragraph, treat
      // it as the start of the answer (rare; happens when the writer puts
      // the first answer sentence on the same line as the question).
      const rest = inner.slice(1);
      const restNonEmpty = rest.some((n) => typeof n === 'string' ? n.trim().length > 0 : true);
      if (rest.length > 0 && restNonEmpty) {
        current.answer.push(<p key="q-trailing">{rest}</p>);
      }
    } else if (current) {
      // Continuation paragraph (or list / hr / quote) — part of the current answer.
      current.answer.push(child);
    }
  });

  if (current) items.push(current);
  return items;
}
