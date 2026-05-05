import React from 'react';

export type AnswerBlockVariant = 'standalone' | 'inline';

export interface AnswerBlockProps {
  /** 134-167 word body per brandvoice rule, as plain string. Use this for
   *  programmatic embeds where you have the text as a value. The component
   *  does not enforce the count — the editor / brandvoice check does. */
  body?: string;
  /** Markdown / JSX rendering of the body. Preferred when the answer block
   *  comes from a markdown directive (`:::answer-block`), since the body
   *  contains formatted text (italics, citations, links) that can't survive
   *  a flatten to string. If both children and body are provided, children
   *  wins. */
  children?: React.ReactNode;
  /** Optional eyebrow above the block, e.g. "Kurz erklärt". */
  eyebrow?: string;
  /** Optional citation/source line below the block. */
  attribution?: string;
  variant?: AnswerBlockVariant;
}

/**
 * AnswerBlock — the GEO-optimized 134-167-word block that opens every
 * .healthcare article. Stands alone, citable by AI engines, named guideline
 * up top, concrete action at the bottom.
 *
 * Per `deinteam-brandvoice`: opens with one of (a) practice-observed number,
 * (b) named guideline (ESC/SSED/AWMF), or (c) concrete patient scenario.
 * Never a generic "In diesem Artikel…".
 *
 * Two call shapes supported:
 *
 *   <AnswerBlock body="Frauenkardiologie heisst..." eyebrow="Kurz erklärt" />
 *
 *   :::answer-block{eyebrow="Kurz erklärt"}
 *     Frauenkardiologie *heisst*, die [klinische Differenz](url) ernst nehmen.
 *   :::
 */
export function AnswerBlock({
  body,
  children,
  eyebrow,
  attribution,
  variant = 'standalone',
}: AnswerBlockProps): React.JSX.Element {
  // children take precedence — they preserve markdown formatting from
  // directive bodies. Fall back to body string for programmatic callers.
  const content: React.ReactNode = children ?? body ?? null;
  return (
    <aside className={`dt-answer-block dt-answer-block--${variant}`} role="note">
      {eyebrow && <p className="dt-answer-block__eyebrow">{eyebrow}</p>}
      <div className="dt-answer-block__body">{content}</div>
      {attribution && <p className="dt-answer-block__attribution">{attribution}</p>}
    </aside>
  );
}
