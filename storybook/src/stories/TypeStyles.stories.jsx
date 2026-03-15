import React from 'react';
import { TypeStyles } from '../components/TypeStyles';

const meta = {
  title: 'Foundations / Typography / Type Styles',
  component: TypeStyles,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark',  value: '#0f0f0f' },
      ],
    },
    docs: {
      description: {
        component: `
Semantic type styles combining font size, weight and line height into a single token.

9 styles × 3 weights = 27 tokens total.

| Style | Size | Use case |
|---|---|---|
| \`display\` | 33px | Hero headings, marketing |
| \`title-1\` | 28px | Page titles |
| \`title-2\` | 23px | Section headings |
| \`title-3\` | 19px | Sub-section headings |
| \`title-4\` | 16px | Card titles, panel headings |
| \`body\` | 16px | Default body text |
| \`body-sm\` | 13px | Secondary body text |
| \`label\` | 13px | UI labels, form labels |
| \`label-sm\` | 11px | Captions, helper text |

Each style has 3 weights: **light** (300), **regular** (400), **bold** (700).

---

### Updating the type scale

Type styles reference the typography scale tokens. If you change the scale:

1. Go to **Foundations / Typography**
2. Adjust base size and ratio until you're happy
3. Click **Export tokens.json** — copies the JSON to clipboard
4. Paste it into \`tokens/base/typography.json\`
5. The type styles will reflect the new scale on next Storybook reload

> The size values in this story are resolved from \`tokens/base/typography.json\` — keeping that file up to date is the source of truth for the entire type system.

Click any row to copy the token name to clipboard.
        `.trim(),
      },
    },
  },
};

export default meta;

export const Default = {
  name: 'Type Styles',
};