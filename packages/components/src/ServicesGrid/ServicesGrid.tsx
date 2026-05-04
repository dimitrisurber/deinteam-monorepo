import React from 'react';

export type ServicesGridVariant = 'three_column' | 'two_column' | 'list';

export interface ServiceItem {
  title: string;
  description: string;
  href?: string;
  /** Optional CHF price line ("ab CHF 500"). */
  price?: string;
  /** Optional icon name from the shared icon set. */
  icon?: string;
}

export interface ServicesGridProps {
  variant?: ServicesGridVariant;
  headline?: string;
  intro?: string;
  services: ServiceItem[];
}

/**
 * ServicesGrid — display a list of practice services. Variants are layout
 * only: three_column (desktop default), two_column (denser), list (vertical
 * with longer descriptions).
 */
export function ServicesGrid({
  variant = 'three_column',
  headline,
  intro,
  services,
}: ServicesGridProps): React.JSX.Element {
  return (
    <section className={`dt-services dt-services--${variant}`}>
      {(headline || intro) && (
        <header className="dt-services__header">
          {headline && <h2 className="dt-services__headline">{headline}</h2>}
          {intro && <p className="dt-services__intro">{intro}</p>}
        </header>
      )}
      <ul className="dt-services__grid">
        {services.map((s, i) => (
          <li key={i} className="dt-services__item">
            {s.href ? (
              <a href={s.href} className="dt-services__link">
                <ServiceItemBody item={s} />
              </a>
            ) : (
              <ServiceItemBody item={s} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ServiceItemBody({ item }: { item: ServiceItem }): React.JSX.Element {
  return (
    <>
      <h3 className="dt-services__title">{item.title}</h3>
      <p className="dt-services__description">{item.description}</p>
      {item.price && <p className="dt-services__price">{item.price}</p>}
    </>
  );
}
