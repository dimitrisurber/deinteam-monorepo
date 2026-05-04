/**
 * Shared types used by every component.
 *
 * Components are content-agnostic — they take typed props, never read from
 * the CMS or env. The app/SectionRenderer fetches and resolves; components
 * render.
 */

export interface CTA {
  text: string;
  href: string;
  /** Defaults to 'primary'. */
  intent?: 'primary' | 'secondary' | 'ghost';
  /** Open in new tab. Defaults to false. */
  external?: boolean;
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** For art-direction. */
  srcset?: string;
}

export interface TrustIndicator {
  icon?: 'user' | 'lock' | 'check' | 'clock' | 'shield' | 'phone' | 'mail';
  text: string;
}

/** Reference to a piece of content stored in EmDash by slug. */
export interface ContentRef {
  collection: string;
  slug: string;
}
