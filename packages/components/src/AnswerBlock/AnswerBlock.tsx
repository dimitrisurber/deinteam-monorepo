import React from 'react';

export type AnswerBlockVariant = 'standalone' | 'inline';

export interface AnswerBlockProps {
  /** 134-167 word body per brandvoice rule. The component does not enforce
   *  the count — the editor / brandvoice check does. */
  body: string;
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
 */
export function AnswerBlock({
  body,
  eyebrow,
  attribution,
  variant = 'standalone',
}: AnswerBlockProps): React.JSX.Element {
  return (
    <aside className={`dt-answer-block dt-answer-block--${variant}`} role="note">
      {eyebrow && <p className="dt-answer-block__eyebrow">{eyebrow}</p>}
      <p className="dt-answer-block__body">{body}</p>
      {attribution && <p className="dt-answer-block__attribution">{attribution}</p>}
    </aside>
  );
}
