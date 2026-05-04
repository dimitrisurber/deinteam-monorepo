import React from 'react';

export interface RiskCalculatorProps {
  /** Which scoring framework, e.g. "ESC-2021", "AHA-2024", "SCORE2-OP". */
  framework?: string;
}

/**
 * RiskCalculator — placeholder for the interactive cardiovascular risk
 * widget. The interactive implementation hasn't shipped yet; this card
 * signals the embed point on the published page and keeps the directive
 * round-trippable through the medical-review pipeline.
 *
 * Replace the inner JSX with the real interactive widget once it exists.
 * Keep the same `framework` prop and class names so existing articles
 * continue to render without rewrites.
 */
export function RiskCalculator({ framework = 'ESC-2021' }: RiskCalculatorProps): React.JSX.Element {
  return (
    <aside className="dt-risk-calculator dt-risk-calculator--placeholder">
      <p className="dt-risk-calculator__eyebrow">Interaktive Komponente</p>
      <h4 className="dt-risk-calculator__title">Risk Calculator: {framework}</h4>
      <p className="dt-risk-calculator__note">
        Auf der publizierten Seite wird hier der interaktive Score-Rechner eingeblendet.
      </p>
    </aside>
  );
}
