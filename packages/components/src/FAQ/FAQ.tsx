import React from 'react';

export type FAQVariant = 'standard' | 'two_column';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  variant?: FAQVariant;
  headline?: string;
  intro?: string;
  items: FAQItem[];
  /** WhatsApp / call-us nudge below the list. */
  more_text?: string;
  more_href?: string;
}

/**
 * FAQ — uses native <details>/<summary> so it works without JS. JS hydration
 * not needed.
 */
export function FAQ({
  variant = 'standard',
  headline,
  intro,
  items,
  more_text,
  more_href,
}: FAQProps): React.JSX.Element {
  return (
    <section className={`dt-faq dt-faq--${variant}`}>
      {(headline || intro) && (
        <header className="dt-faq__header">
          {headline && <h2 className="dt-faq__headline">{headline}</h2>}
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
      {more_text && more_href && (
        <p className="dt-faq__more">
          <a href={more_href}>{more_text}</a>
        </p>
      )}
    </section>
  );
}
