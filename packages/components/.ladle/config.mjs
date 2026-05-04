// Ladle config — lightweight Storybook alternative for previewing components.
// Run with: pnpm --filter @deinteam/components ladle  (or pnpm ladle from repo root)

export default {
  port: 61000,
  stories: 'src/**/*.stories.@(js|jsx|ts|tsx)',
};
