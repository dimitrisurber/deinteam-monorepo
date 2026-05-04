/**
 * Schema for an EmDash `sections_config` entry.
 *
 * Pages in EmDash store an ordered array of these. The renderer iterates and
 * dispatches to the matching component package. Adding a section type means
 * adding a new variant here AND a case in `dispatch.ts` — TS will tell you if
 * you forgot.
 */

import type { HeroProps } from '@deinteam/components';
import type { AnswerBlockProps } from '@deinteam/components';
import type { ServicesGridProps } from '@deinteam/components';
import type { PhysicianCardProps } from '@deinteam/components';
import type { FAQProps } from '@deinteam/components';
import type { CTABlockProps } from '@deinteam/components';

export type Section =
  | { type: 'hero'; props: HeroProps }
  | { type: 'answer_block'; props: AnswerBlockProps }
  | { type: 'services_grid'; props: ServicesGridProps }
  | { type: 'physician_card'; props: PhysicianCardProps }
  | { type: 'faq'; props: FAQProps }
  | { type: 'cta'; props: CTABlockProps };

export type SectionType = Section['type'];

export interface SectionsConfig {
  sections: Section[];
}
