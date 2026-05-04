import React from 'react';
import { Hero } from './Hero';

export const CenteredWithCTA = () => (
  <Hero
    variant="centered_with_cta"
    eyebrow="Privatpraxis Zürich"
    headline="Hausärztliche Sprechstunde, ohne lange Wartezeiten."
    subhead="Termine innerhalb von 48 Stunden. Sprechstunden bis 19 Uhr. Kein Praxisstress."
    primary_cta={{ text: 'Termin buchen', href: '/termin' }}
    secondary_cta={{ text: 'WhatsApp', href: 'https://wa.me/41…', external: true }}
    trust_indicators={[
      { text: 'Schweizer Praxis seit 2018' },
      { text: 'KVG/IV anerkannt' },
      { text: 'Direktabrechnung' },
    ]}
  />
);

export const SplitImage = () => (
  <Hero
    variant="split_image"
    headline="Persönliche Hausarztmedizin in Zürich Enge."
    subhead="Wir nehmen uns Zeit. 30 Minuten pro Termin, statt 7."
    primary_cta={{ text: 'Erstgespräch buchen', href: '/termin' }}
    image={{
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200',
      alt: 'Sprechzimmer mit Blick auf den See',
    }}
  />
);

export const Minimal = () => (
  <Hero
    variant="minimal"
    headline="Weniger Wartezimmer, mehr Sprechstunde."
    subhead="Jetzt Patient:in werden."
    primary_cta={{ text: 'Aufnahme anfragen', href: '/aufnahme' }}
  />
);

export const WithVideo = () => (
  <Hero
    variant="with_video"
    headline="Eine Praxis, die Zeit hat."
    subhead="Hausärztliche Versorgung in Zürich."
    primary_cta={{ text: 'Termin', href: '/termin' }}
    video={{
      src: 'https://cdn.coverr.co/videos/coverr-doctor-with-stethoscope-1080.mp4',
    }}
  />
);
