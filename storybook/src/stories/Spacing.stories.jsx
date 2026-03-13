import React from 'react';
import { SpacingScale } from '../components/SpacingScale';

const meta = {
  title: 'Design System / Spacing',
  component: SpacingScale,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',  value: '#0f0f0f' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    docs: {
      description: {
        component: `
Spacing scale for the design system.

8 steps based on a 4px grid. Each token maps to a CSS custom property:

| Token | px | rem | CSS |
|---|---|---|---|
| \`spacing.xxs\`  | 4px  | 0.25rem | \`--dao-spacing-xxs\` |
| \`spacing.xs\`   | 8px  | 0.5rem  | \`--dao-spacing-xs\` |
| \`spacing.sm\`   | 12px | 0.75rem | \`--dao-spacing-sm\` |
| \`spacing.md\`   | 16px | 1rem    | \`--dao-spacing-md\` |
| \`spacing.lg\`   | 24px | 1.5rem  | \`--dao-spacing-lg\` |
| \`spacing.xl\`   | 32px | 2rem    | \`--dao-spacing-xl\` |
| \`spacing.xxl\`  | 48px | 3rem    | \`--dao-spacing-xxl\` |
| \`spacing.xxxl\` | 64px | 4rem    | \`--dao-spacing-xxxl\` |

Click any row to copy the token name to clipboard.
        `.trim(),
      },
    },
  },
};

export default meta;

export const Default = {
  name: 'Spacing Scale',
};