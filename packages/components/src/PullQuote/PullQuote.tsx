import React from 'react';

export interface PullQuoteProps {
  /** The person/study being quoted, e.g. "Mehta 2016". */
  author?: string;
  /** Source/journal, e.g. "Circulation". */
  cite?: string;
  children?: React.ReactNode;
}

/**
 * PullQuote — single attributed quote, used inside an article body to
 * surface a short, citation-anchored claim. Brand-styled blockquote with
 * Lora italic body and small attribution.
 */
export function PullQuote({ author, cite, children }: PullQuoteProps): React.JSX.Element {
  return (
    <figure className="dt-pull-quote">
      <blockquote className="dt-pull-quote__body">{children}</blockquote>
      {(author || cite) && (
        <figcaption className="dt-pull-quote__attribution">
          {author && <span className="dt-pull-quote__author">{author}</span>}
          {author && cite && <span className="dt-pull-quote__sep"> · </span>}
          {cite && <cite className="dt-pull-quote__cite">{cite}</cite>}
        </figcaption>
      )}
    </figure>
  );
}
