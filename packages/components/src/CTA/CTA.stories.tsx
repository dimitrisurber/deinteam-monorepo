import React from 'react';
import { CTABlock } from './CTA';

export const Centered = () => (
  <CTABlock
    variant="centered"
    eyebrow="Jetzt Patient:in werden"
    headline="Bereit für eine Hausarztpraxis mit Zeit?"
    subhead="15-minütiges Erstgespräch, kostenfrei. Wir klären Bedarf und Aufnahme."
    primary_cta={{ text: 'Erstgespräch buchen', href: '/termin' }}
    secondary_cta={{ text: 'Anrufen', href: 'tel:+41441234567' }}
    trust_text="Antwort innerhalb von 24 h, garantiert."
  />
);

export const Banner = () => (
  <CTABlock
    variant="banner"
    headline="Notfall? Rufen Sie 144."
    subhead="Für nicht-akute Fragen: WhatsApp während der Öffnungszeiten."
    primary_cta={{ text: 'WhatsApp', href: 'https://wa.me/41…', external: true }}
  />
);

export const Minimal = () => (
  <CTABlock
    variant="minimal"
    headline="Fragen vor dem ersten Termin?"
    primary_cta={{ text: 'Kontakt', href: '/kontakt' }}
  />
);

export const SplitWithForm = () => (
  <CTABlock
    variant="split_with_form"
    headline="Aufnahme als Patient:in"
    subhead="Wir melden uns innerhalb eines Werktags."
    form_embed_code="DEMO_EMBED_CODE"
  />
);
