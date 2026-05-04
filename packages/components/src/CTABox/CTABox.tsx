import React from 'react';

export type CTABoxVariant = 'clinic' | 'alpine' | 'urgent';

export interface CTABoxProps {
  /** Visual treatment. `clinic` is the primary blue booking box,
   *  `alpine` is the trust-signal beige variant, `urgent` is amber for
   *  emergency-direction articles. */
  variant?: CTABoxVariant;
  headline?: string;
  body?: string;
  /** Booking or trust link. */
  url?: string;
  /** CTA button text. */
  label?: string;
}

/**
 * CTABox — the "blue explorer box" that closes most editorial articles.
 * Distinct from CTABlock (which is a full-width section). On the public
 * theme, this is normally driven by the article's `cta_box` frontmatter
 * and rendered after the body. Inside the body via the `::cta-box` directive
 * is also supported (used for review-preview round-tripping).
 */
export function CTABox({
  variant = 'clinic',
  headline,
  body,
  url,
  label = 'Termin buchen',
}: CTABoxProps): React.JSX.Element {
  return (
    <aside className={`dt-cta-box dt-cta-box--${variant}`}>
      {headline && <h3 className="dt-cta-box__headline">{headline}</h3>}
      {body && <p className="dt-cta-box__body">{body}</p>}
      {url && (
        <a className="dt-cta-box__cta" href={url} target="_blank" rel="noopener noreferrer">
          {label} →
        </a>
      )}
    </aside>
  );
}
