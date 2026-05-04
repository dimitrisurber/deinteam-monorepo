import React from 'react';
import { AnswerBlock } from './AnswerBlock';

const body =
  'Bei akutem Bluthochdruck (über 180/110 mmHg) empfehlen ESC und SSED, zuerst andere Symptome abzuklären — Kopfschmerz, Sehstörung, Brustdruck. Bestehen keine, lässt sich der Druck meist ambulant senken: Ruhe, kontrolliertes Atmen, schrittweise Medikation nach Plan. Notfallmässige Senkung um mehr als 25 % in der ersten Stunde gilt als zu schnell und kann eine Minderdurchblutung auslösen. In der Praxis sehen wir häufig, dass Patient:innen wegen einer einmaligen hohen Messung in den Notfall fahren — oft ist das nicht nötig, wenn keine Endorgan-Symptome bestehen. Wer unsicher ist: 30 Minuten ruhig sitzen, erneut messen, dann entscheiden.';

export const Standalone = () => (
  <AnswerBlock
    eyebrow="Kurz erklärt"
    body={body}
    attribution="Dr. med. Glökler, Hausarztpraxis Zürich Enge — basierend auf ESC-Leitlinie 2024."
    variant="standalone"
  />
);

export const Inline = () => (
  <AnswerBlock
    body="Eine Erkältung dauert in der Regel 7-10 Tage. Antibiotika helfen nicht — sie wirken nur gegen Bakterien, nicht gegen Viren. Ruhe, Flüssigkeit, ggf. Paracetamol bei Fieber."
    variant="inline"
  />
);
