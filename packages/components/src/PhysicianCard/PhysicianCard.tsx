import React from 'react';

export type PhysicianCardVariant = 'with_voice_signature' | 'compact' | 'full';

export interface PhysicianCardProps {
  variant?: PhysicianCardVariant;
  name: string;
  title?: string;
  credentials?: string;
  bio?: string;
  /** From the brandvoice doc — internal facing. */
  voice_signature?: string;
  photo?: { src: string; alt: string };
  /** Topics this physician owns — chips below the bio. */
  owns_topics?: string[];
  /** Link to full profile page. */
  href?: string;
}

/**
 * PhysicianCard — author byline, bio, profile link.
 *
 * Variants:
 * - `compact`: name + credentials only (for inline bylines on articles)
 * - `with_voice_signature`: shows the voice_signature (admin/internal)
 * - `full`: everything including bio + topic chips (profile page hero)
 */
export function PhysicianCard({
  variant = 'compact',
  name,
  title,
  credentials,
  bio,
  voice_signature,
  photo,
  owns_topics,
  href,
}: PhysicianCardProps): React.JSX.Element {
  const fullName = [title, name, credentials && `(${credentials})`].filter(Boolean).join(' ');

  if (variant === 'compact') {
    return (
      <span className="dt-physician dt-physician--compact">
        {photo && <img src={photo.src} alt={photo.alt} className="dt-physician__avatar" />}
        {href ? <a href={href}>{fullName}</a> : <span>{fullName}</span>}
      </span>
    );
  }

  return (
    <article className={`dt-physician dt-physician--${variant}`}>
      {photo && (
        <img
          src={photo.src}
          alt={photo.alt}
          className="dt-physician__photo"
          loading="lazy"
        />
      )}
      <div className="dt-physician__body">
        <h3 className="dt-physician__name">
          {href ? <a href={href}>{fullName}</a> : fullName}
        </h3>
        {variant === 'with_voice_signature' && voice_signature && (
          <p className="dt-physician__voice">{voice_signature}</p>
        )}
        {variant === 'full' && bio && <p className="dt-physician__bio">{bio}</p>}
        {variant === 'full' && owns_topics && owns_topics.length > 0 && (
          <ul className="dt-physician__topics">
            {owns_topics.map((t, i) => (
              <li key={i} className="dt-physician__topic-chip">{t}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
