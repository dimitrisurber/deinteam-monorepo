import React from 'react';
import { ServicesGrid } from './ServicesGrid';

const services = [
  {
    title: 'Hausärztliche Sprechstunde',
    description: 'Allgemeinmedizinische Abklärung, chronische Erkrankungen, Vorsorge.',
    href: '/leistungen/hausarzt',
    price: 'KVG-anerkannt',
  },
  {
    title: 'Vorsorgecheck',
    description: 'Jährlicher Gesundheits-Check mit Labor, EKG und Beratung.',
    href: '/leistungen/vorsorge',
    price: 'ab CHF 280',
  },
  {
    title: 'Reisemedizin & Impfungen',
    description: 'Reiseberatung, Gelbfieber, Auffrischimpfungen, Tropentauglichkeit.',
    href: '/leistungen/reisemedizin',
  },
];

export const ThreeColumn = () => (
  <ServicesGrid
    variant="three_column"
    headline="Unsere Leistungen"
    intro="Hausärztliche Versorgung mit Zeit für jedes Anliegen."
    services={services}
  />
);

export const TwoColumn = () => (
  <ServicesGrid variant="two_column" headline="Schwerpunkte" services={services.slice(0, 2)} />
);

export const List = () => (
  <ServicesGrid variant="list" services={services} />
);
