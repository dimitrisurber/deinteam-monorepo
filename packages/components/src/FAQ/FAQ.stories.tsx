import React from 'react';
import { FAQ } from './FAQ';

const items = [
  {
    question: 'Nehmen Sie neue Patient:innen auf?',
    answer:
      'Ja, wir nehmen laufend neue Patient:innen auf. Die Aufnahme läuft über ein kurzes Erstgespräch (15 Minuten, kostenfrei).',
  },
  {
    question: 'Wie schnell bekomme ich einen Termin?',
    answer:
      'Akute Anliegen werden in der Regel innerhalb von 48 Stunden abgedeckt. Vorsorgetermine sind 2-3 Wochen im Voraus planbar.',
  },
  {
    question: 'Welche Krankenkassen werden akzeptiert?',
    answer:
      'Wir rechnen direkt über alle Schweizer Grundversicherer (KVG) ab. Zusatzversicherungen werden je nach Police übernommen.',
  },
  {
    question: 'Wo ist die Praxis?',
    answer:
      'Mythenquai 12, 8002 Zürich. Tram 5 / 7 bis Bahnhof Enge, dann 4 Minuten zu Fuss.',
  },
];

export const Standard = () => (
  <FAQ
    variant="standard"
    headline="Häufige Fragen"
    intro="Was Patient:innen oft wissen wollen, bevor sie das erste Mal zu uns kommen."
    items={items}
    more_text="Andere Frage? Schreiben Sie uns auf WhatsApp."
    more_href="https://wa.me/41…"
  />
);

export const TwoColumn = () => (
  <FAQ variant="two_column" headline="Häufige Fragen" items={items} />
);
