import React from 'react';
import { TypographyScale } from '../components/TypographyScale';

const meta = {
  title: 'Foundations / Typography',
  component: TypographyScale,
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
Modular type scale generator.

Choose a **base size** (default 16px) and a **ratio** to generate a consistent typographic scale.
All steps are calculated as \`base × ratio^n\` and rounded to the nearest pixel.

### How to use

1. Move the **base size** slider and pick a **ratio** until you're happy with the scale
2. Click **Export tokens.json** — the resolved JSON is copied to your clipboard
3. Paste it into \`tokens/base/typography.json\`
4. Run \`npm run build-tokens\` — StyleDictionary outputs CSS variables with the exact px values you chose

Storybook acts as a visual configurator — you see the scale live, you decide, you export.
The token file is always the source of truth for the build, but you generate it interactively instead of writing numbers by hand.

---

### Available ratios

| Name | Ratio | Best for |
|---|---|---|
| Minor Second | 1.067 | Dense UIs, data-heavy interfaces |
| Major Second | 1.125 | Compact editorial, dashboards |
| Minor Third | 1.200 | Balanced — most common choice |
| Major Third | 1.250 | Spacious, consumer apps |
| Perfect Fourth | 1.333 | Strong hierarchy, marketing sites |
| Golden Ratio | 1.618 | Dramatic, display-heavy layouts |

Click any row to copy the token name to clipboard.
        `.trim(),
      },
    },
  },
  argTypes: {
    base: {
      control: { type: 'range', min: 12, max: 24, step: 1 },
      description: 'Base font size in px',
      table: { defaultValue: { summary: 16 } },
    },
    ratio: {
      control: 'select',
      options: [1.067, 1.125, 1.2, 1.25, 1.333, 1.618],
      description: 'Scale ratio',
      table: { defaultValue: { summary: 1.2 } },
    },
  },
};

export default meta;

export const Default = {
  name: 'Minor Third (1.2)',
  args: { base: 16, ratio: 1.2 },
};

export const Compact = {
  name: 'Major Second (1.125)',
  args: { base: 16, ratio: 1.125 },
  parameters: {
    docs: { description: { story: 'Compact scale — good for dashboards and data-dense UIs.' } },
  },
};

export const Expressive = {
  name: 'Perfect Fourth (1.333)',
  args: { base: 16, ratio: 1.333 },
  parameters: {
    docs: { description: { story: 'Strong hierarchy — good for marketing sites and editorial layouts.' } },
  },
};