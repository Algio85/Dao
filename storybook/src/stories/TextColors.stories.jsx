import React from 'react';
import { TextColors } from '../components/TextColors';

const meta = {
  title: 'Foundations / Colors / Text Colors',
  component: TextColors,
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
Semantic text color tokens for the design system.

---

### Neutral text

| Token | Shade | Use case |
|---|---|---|
| \`text.default\` | palette-11.12 | Primary body text |
| \`text.subtle\` | palette-11.9 | Secondary text, captions |
| \`text.subtlest\` | palette-11.7 | Placeholder, disabled text |
| \`text.inverse\` | palette-11.1 | Text on dark backgrounds |

### Role-based text

| Token | Palette | Use case |
|---|---|---|
| \`text.brand-1\` | palette-1 | Brand 1 colored text |
| \`text.brand-2\` | palette-2 | Brand 2 colored text |
| \`text.brand-3\` | palette-3 | Brand 3 colored text |
| \`text.success\` | palette-4 | Success messages |
| \`text.danger\` | palette-5 | Error messages |
| \`text.alert\` | palette-6 | Warning messages |
| \`text.info\` | palette-7 | Info messages |
| \`text.news\` | palette-8 | News text |
| \`text.ai\` | palette-9 | AI-generated content |

---

### Updating text colors

Text tokens reference palette shades directly. If you change the base colors:

1. Go to **Foundations / Colors / Color Palette**
2. Change the base color using the color pickers
3. Click **Update tokens**
4. Text colors will update automatically

To make changes permanent:

1. Edit \`tokens/base/colors.json\` with the new hex values
2. Run \`npm run generate-shades\`
3. Copy: \`cp tokens/base/shades.json storybook/src/tokens/shades.json\`

Click any row to copy the token name to clipboard.
        `.trim(),
      },
    },
  },
};

export default meta;

export const Default = {
  name: 'Text Colors',
};