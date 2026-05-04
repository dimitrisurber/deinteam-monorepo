import React from 'react';
import { renderSection } from './dispatch';
import type { Section } from './types';

export interface SectionRendererProps {
  sections: Section[];
}

/**
 * Iterates over a page's sections_config and renders each section.
 * Apps fetch the page from EmDash, then pass `page.sections_config.sections`
 * to this component. Components handle their own brand-token CSS vars via
 * the surrounding layout.
 */
export function SectionRenderer({ sections }: SectionRendererProps): React.JSX.Element {
  return <>{sections.map((section, i) => renderSection(section, i))}</>;
}
