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

function isPElement(node: unknown): node is React.ReactElement<{ children?: React.ReactNode }> {
  return (
    React.isValidElement(node)
    && typeof node.type === 'string'
    && node.type.toLowerCase() === 'p'
  );
}

function isStrongElement(node: unknown): node is React.ReactElement<{ children?: React.ReactNode }> {
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
    if (!isPElement(child)) {
      // Skip whitespace text nodes between paragraphs; carry-through anything
      // else (like <ul> or <hr>) as part of the current answer.
      if (current && React.isValidElement(child)) {
        current.answer.push(child);
      }
      return;
    }
    const inner = React.Children.toArray(child.props.children);
    const first = inner[0];
    if (isStrongElement(first)) {
      // Start a new Q/A pair. The <strong>'s children are the question.
      if (current) items.push(current);
      current = { question: first.props.children, answer: [] };
      // If there's content after the <strong> in the same <p>, treat it as
      // the start of the answer (rare but happens when the writer puts the
      // first answer sentence on the same line as the question).
      const rest = inner.slice(1);
      if (rest.length > 0 && rest.some(n => typeof n === 'string' ? n.trim() : true)) {
        current.answer.push(<p key="q-trailing">{rest}</p>);
      }
    } else if (current) {
      // Continuation paragraph — part of the current answer.
      current.answer.push(child);
    }
  });

  if (current) items.push(current);
  return items;
}
