// Ladle global decorators — wraps every story with brand-token CSS vars
// so components see --color-primary etc. just like they would in a real app.

import React from 'react';
import { tokensToCssVars, type BrandId } from '@deinteam/brand-tokens';
import '../src/styles.css';

export const argTypes = {
  brand: {
    control: { type: 'radio' },
    options: ['dth', 'dtl'] as BrandId[],
    defaultValue: 'dth',
  },
};

export const Provider = ({ children, globalState }: any) => {
  const brand = (globalState.control?.brand ?? 'dth') as BrandId;
  const cssVars = tokensToCssVars(brand);
  return (
    <div style={{ ...cssVars, fontFamily: 'var(--font-body)', minHeight: '100vh' }}>
      {children}
    </div>
  );
};
