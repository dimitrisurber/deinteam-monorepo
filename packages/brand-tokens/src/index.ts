/**
 * @deinteam/brand-tokens
 *
 * Source of truth for DTH and DTL brand identity.
 * Logos, colors, fonts. Imported by every app + components consume via CSS vars.
 */

import dth from './dth.json' with { type: 'json' };
import dtl from './dtl.json' with { type: 'json' };
import shared from './shared.json' with { type: 'json' };

export type BrandId = 'dth' | 'dtl';

export interface BrandTokens {
  brand: {
    id: BrandId;
    name: string;
    shortName: string;
    tagline: string;
    logo: {
      primary: string;
      secondary: string;
      monogram: string;
      alt: string;
    };
  };
  colors: typeof dth.colors;
  fonts: typeof dth.fonts;
  fontWeights: typeof dth.fontWeights;
}

export interface SharedTokens {
  spacing: typeof shared.spacing;
  radii: typeof shared.radii;
  shadows: typeof shared.shadows;
  breakpoints: typeof shared.breakpoints;
  fontSizes: typeof shared.fontSizes;
  lineHeights: typeof shared.lineHeights;
}

export const tokens: Record<BrandId, BrandTokens> = {
  dth: dth as BrandTokens,
  dtl: dtl as BrandTokens,
};

export const shared_tokens: SharedTokens = shared as SharedTokens;

/**
 * Flattens the per-brand + shared tokens into a record of CSS custom property
 * declarations the app can drop on `:root`. Components reference these via
 * `var(--color-primary)` etc., never hardcoded.
 */
export function tokensToCssVars(brand: BrandId): Record<string, string> {
  const t = tokens[brand];
  const vars: Record<string, string> = {};

  for (const [k, v] of Object.entries(t.colors)) vars[`--color-${kebab(k)}`] = v;
  for (const [k, v] of Object.entries(t.fonts)) vars[`--font-${kebab(k)}`] = v;
  for (const [k, v] of Object.entries(t.fontWeights)) vars[`--font-weight-${kebab(k)}`] = String(v);
  for (const [k, v] of Object.entries(shared_tokens.spacing)) vars[`--space-${k}`] = v;
  for (const [k, v] of Object.entries(shared_tokens.radii)) vars[`--radius-${k}`] = v;
  for (const [k, v] of Object.entries(shared_tokens.shadows)) vars[`--shadow-${k}`] = v;
  for (const [k, v] of Object.entries(shared_tokens.fontSizes)) vars[`--font-size-${k}`] = v;
  for (const [k, v] of Object.entries(shared_tokens.lineHeights)) vars[`--line-height-${k}`] = v;
  vars['--brand-logo-primary'] = `url("${t.brand.logo.primary}")`;
  vars['--brand-logo-monogram'] = `url("${t.brand.logo.monogram}")`;

  return vars;
}

function kebab(s: string): string {
  return s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
