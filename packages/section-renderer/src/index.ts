/**
 * @deinteam/section-renderer
 *
 * Dispatch layer between EmDash `sections_config` JSON and the component
 * library. The contract:
 *
 *   page.sections_config.sections: Section[]
 *     ├─ { type: 'hero', props: HeroProps }
 *     ├─ { type: 'answer_block', props: AnswerBlockProps }
 *     ├─ { type: 'services_grid', props: ServicesGridProps }
 *     ├─ { type: 'physician_card', props: PhysicianCardProps }
 *     ├─ { type: 'faq', props: FAQProps }
 *     └─ { type: 'cta', props: CTABlockProps }
 */

export { SectionRenderer } from './SectionRenderer';
export type { SectionRendererProps } from './SectionRenderer';
export { renderSection } from './dispatch';
export type { Section, SectionType, SectionsConfig } from './types';
