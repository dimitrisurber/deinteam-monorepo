import React from 'react';
import type { CTA as CTAType, TrustIndicator } from '../types';

export type CTABlockVariant = 'centered' | 'split_with_form' | 'minimal' | 'banner';

export interface CTABlockProps {
  variant?: CTABlockVariant;
  headline: string;
  subhead?: string;
  primary_cta?: CTAType;
  secondary_cta?: CTAType;
  trust_text?: string;
  trust_indicators?: TrustIndicator[];
  /** For 'split_with_form' — embed code from Alchemy Labs forms. */
  form_embed_code?: string;
  /** Optional eyebrow above the headline. */
  eyebrow?: string;
}

/**
 * CTABlock — the closing call to action on a page. Distinct from a CTA button
 * (`types.ts:CTA`) — this is the whole section.
 */
export function CTABlock({
  variant = 'centered',
  headline,
  subhead,
  primary_cta,
  secondary_cta,
  trust_text,
  trust_indicators,
  form_embed_code,
  eyebrow,
}: CTABlockProps): React.JSX.Element {
  const ButtonRow = (primary_cta || secondary_cta) && (
    <div className="dt-cta__buttons">
      {primary_cta && (
        <a
          href={primary_cta.href}
          className="dt-btn dt-btn--primary"
          {...(primary_cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {primary_cta.text}
        </a>
      )}
      {secondary_cta && (
        <a
          href={secondary_cta.href}
          className="dt-btn dt-btn--ghost"
          {...(secondary_cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {secondary_cta.text}
        </a>
      )}
    </div>
  );

  const Body = (
    <>
      {eyebrow && <p className="dt-cta__eyebrow">{eyebrow}</p>}
      <h2 className="dt-cta__headline">{headline}</h2>
      {subhead && <p className="dt-cta__subhead">{subhead}</p>}
      {ButtonRow}
      {trust_text && <p className="dt-cta__trust-text">{trust_text}</p>}
      {trust_indicators && trust_indicators.length > 0 && (
        <ul className="dt-cta__trust-row">
          {trust_indicators.map((t, i) => (
            <li key={i}>{t.text}</li>
          ))}
        </ul>
      )}
    </>
  );

  if (variant === 'split_with_form' && form_embed_code) {
    return (
      <section className="dt-cta dt-cta--split">
        <div className="dt-cta__copy">{Body}</div>
        <div className="dt-cta__form">
          <iframe
            src={`https://opus.alchemy.zuerich/api/f/${form_embed_code}/page`}
            style={{ width: '100%', minHeight: 480, border: 'none' }}
            title="Form"
          />
        </div>
      </section>
    );
  }

  if (variant === 'banner') {
    return (
      <section className="dt-cta dt-cta--banner">
        <div className="dt-cta__banner-inner">{Body}</div>
      </section>
    );
  }

  if (variant === 'minimal') {
    return <section className="dt-cta dt-cta--minimal">{Body}</section>;
  }

  return (
    <section className="dt-cta dt-cta--centered">
      <div className="dt-cta__centered-inner">{Body}</div>
    </section>
  );
}
