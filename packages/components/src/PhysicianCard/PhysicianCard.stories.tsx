import React from 'react';
import { PhysicianCard } from './PhysicianCard';

const photo = {
  src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
  alt: 'Porträt Dr. Glökler',
};

export const Compact = () => (
  <PhysicianCard
    variant="compact"
    name="Glökler"
    title="Dr. med."
    credentials="FMH Allgemeine Innere Medizin"
    photo={photo}
    href="/team/glökler"
  />
);

export const Full = () => (
  <PhysicianCard
    variant="full"
    name="Glökler"
    title="Dr. med."
    credentials="FMH Allgemeine Innere Medizin"
    bio="Hausarzt mit Praxis in Zürich Enge. Schwerpunkte: kardiovaskuläre Prävention, Diabetes, geriatrische Hausarztmedizin. Vor der eigenen Praxis 12 Jahre am USZ."
    photo={photo}
    owns_topics={['Bluthochdruck', 'Diabetes Typ 2', 'Vorsorge', 'Geriatrie']}
    href="/team/glökler"
  />
);

export const WithVoiceSignature = () => (
  <PhysicianCard
    variant="with_voice_signature"
    name="Glökler"
    title="Dr. med."
    credentials="FMH Allgemeine Innere Medizin"
    voice_signature="Pragmatisch, ruhig, evidenzbasiert. Erklärt Befunde in einfacher Sprache. Schreibt Sätze, keine Fragmente."
    photo={photo}
  />
);
