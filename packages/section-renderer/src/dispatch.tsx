import React from 'react';
import {
  Hero,
  AnswerBlock,
  ServicesGrid,
  PhysicianCard,
  FAQ,
  CTABlock,
} from '@deinteam/components';
import type { Section } from './types';

/**
 * Renders a single section by type. Exhaustive switch — adding a new section
 * type to `Section` will fail typecheck here until handled.
 */
export function renderSection(section: Section, index: number): React.JSX.Element {
  switch (section.type) {
    case 'hero':
      return <Hero key={index} {...section.props} />;
    case 'answer_block':
      return <AnswerBlock key={index} {...section.props} />;
    case 'services_grid':
      return <ServicesGrid key={index} {...section.props} />;
    case 'physician_card':
      return <PhysicianCard key={index} {...section.props} />;
    case 'faq':
      return <FAQ key={index} {...section.props} />;
    case 'cta':
      return <CTABlock key={index} {...section.props} />;
    default: {
      const _exhaustive: never = section;
      void _exhaustive;
      return <></>;
    }
  }
}
