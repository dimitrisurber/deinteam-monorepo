import React from 'react';

export type EditorialListVariant = 'numbered' | 'plain';

export interface EditorialListProps {
  /** Optional section heading shown above the grid. */
  heading?: string;
  /** Optional intro paragraph below the heading. */
  intro?: string;
  /** 2 or 3 column layout. Defaults to 3. */
  columns?: 2 | 3;
  /** `numbered` shows a counter-led tile, `plain` is unmarked. */
  variant?: EditorialListVariant;
  /** Pass a markdown <ul>/<ol> as children. Each <li> becomes a tile. */
  children?: React.ReactNode;
}

/**
 * EditorialList — replaces a boring `<ul>` of comparable items with a
 * structured 2- or 3-column grid where each tile carries a bold label
 * (the first <strong> inside the <li>) and body text. Use when the list
 * items share parallel structure: differentiators, value pillars, decision
 * thresholds, sibling article references.
 */
export function EditorialList({
  heading,
  intro,
  columns = 3,
  variant = 'plain',
  children,
}: EditorialListProps): React.JSX.Element {
  return (
    <section className={`dt-editorial-list dt-editorial-list--cols-${columns}`}>
      {heading && (
        <header className="dt-editorial-list__header">
          <h3 className="dt-editorial-list__heading">{heading}</h3>
          {intro && <p className="dt-editorial-list__intro">{intro}</p>}
        </header>
      )}
      <div className={`dt-editorial-list__grid dt-editorial-list--${variant}`}>{children}</div>
    </section>
  );
}
