import React from 'react';
import type { CTA, Image, TrustIndicator } from '../types';

export type HeroVariant = 'centered_with_cta' | 'split_image' | 'minimal' | 'with_video';

export interface HeroProps {
  /** Visual layout. Default: 'centered_with_cta'. */
  variant?: HeroVariant;
  headline: string;
  subhead?: string;
  primary_cta?: CTA;
  secondary_cta?: CTA;
  /** Required for 'split_image'; ignored elsewhere. */
  image?: Image;
  /** Required for 'with_video'; ignored elsewhere. */
  video?: { src: string; poster?: string };
  /** Small reassurance row under the CTAs. */
  trust_indicators?: TrustIndicator[];
  /** Optional eyebrow text above the headline. */
  eyebrow?: string;
}

/**
 * Hero — the top-of-page anchor.
 *
 * Variants are visual only; the data shape never changes between them. If a
 * page truly needs a different data shape, use a different component.
 *
 * Brand identity comes via CSS custom properties (--color-primary,
 * --font-heading, etc.) injected by the app — this component is brand-agnostic.
 */
export function Hero({
  variant = 'centered_with_cta',
  headline,
  subhead,
  primary_cta,
  secondary_cta,
  image,
  video,
  trust_indicators,
  eyebrow,
}: HeroProps): React.JSX.Element {
  const Inner = (
    <>
      {eyebrow && <p className="dt-hero__eyebrow">{eyebrow}</p>}
      <h1 className="dt-hero__headline">{headline}</h1>
      {subhead && <p className="dt-hero__subhead">{subhead}</p>}
      {(primary_cta || secondary_cta) && (
        <div className="dt-hero__ctas">
          {primary_cta && <CTAButton {...primary_cta} intent={primary_cta.intent ?? 'primary'} />}
          {secondary_cta && <CTAButton {...secondary_cta} intent={secondary_cta.intent ?? 'ghost'} />}
        </div>
      )}
      {trust_indicators && trust_indicators.length > 0 && (
        <ul className="dt-hero__trust">
          {trust_indicators.map((t, i) => (
            <li key={i}>{t.text}</li>
          ))}
        </ul>
      )}
    </>
  );

  if (variant === 'split_image' && image) {
    return (
      <section className="dt-hero dt-hero--split">
        <div className="dt-hero__copy">{Inner}</div>
        <div className="dt-hero__media">
          <img src={image.src} alt={image.alt} loading="eager" />
        </div>
      </section>
    );
  }

  if (variant === 'with_video' && video) {
    return (
      <section className="dt-hero dt-hero--video">
        <video
          className="dt-hero__bg-video"
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="dt-hero__copy dt-hero__copy--overlay">{Inner}</div>
      </section>
    );
  }

  if (variant === 'minimal') {
    return <section className="dt-hero dt-hero--minimal">{Inner}</section>;
  }

  return (
    <section className="dt-hero dt-hero--centered">
      <div className="dt-hero__copy">{Inner}</div>
    </section>
  );
}

function CTAButton({ text, href, intent, external }: CTA): React.JSX.Element {
  return (
    <a
      href={href}
      className={`dt-btn dt-btn--${intent ?? 'primary'}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {text}
    </a>
  );
}
