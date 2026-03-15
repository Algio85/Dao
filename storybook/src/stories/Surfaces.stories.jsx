import React from 'react';
import { SurfaceTokens } from '../components/SurfaceTokens';

const meta = {
  title: 'Foundations / Colors / Surfaces',
  component: SurfaceTokens,
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
Semantic surface tokens map color roles to palette shades.

Each role has 6 variants:

| Variant | Shade | Use case |
|---|---|---|
| \`subtlest\` | 1 | Lightest tint, hover on white |
| \`subtle\` | 2 | Background tints, hover states, low-emphasis surfaces |
| \`default\` | 3 | Standard surface backgrounds |
| \`bold\` | 5 | Medium emphasis |
| \`strong\` | 8 | High-emphasis surfaces, filled badges, icons |
| \`strongest\` | 10 | Filled, inverted |

### Roles

| Role | Palette | Use case |
|---|---|---|
| \`brand-1\` | palette-1 | Primary brand color |
| \`brand-2\` | palette-2 | Secondary brand color |
| \`brand-3\` | palette-3 | Tertiary brand color |
| \`success\` | palette-4 | Positive feedback, confirmations |
| \`danger\` | palette-5 | Errors, destructive actions |
| \`alert\` | palette-6 | Warnings, caution states |
| \`info\` | palette-7 | Informational messages |
| \`news\` | palette-8 | News, updates, announcements |
| \`ai\` | palette-9 | AI-generated content indicators |
| \`neutral\` | palette-11 | Default UI surfaces |

---

### Updating surface colors

Surface tokens reference the color primitives in the palette. If you change the base colors:

1. Go to **Foundations / Color Palette**
2. Change the base color for any palette using the color pickers
3. Click **Update tokens** — updates the live primitives
4. Go to **Foundations / Surfaces** to see the resolved colors update

To make changes permanent:

1. Edit \`tokens/base/colors.json\` with the new hex values
2. Run \`npm run generate-shades\` to rebuild the shade scale
3. Copy the updated shades: \`cp tokens/base/shades.json storybook/src/tokens/shades.json\`
4. Surface tokens will resolve to the new values on next Storybook reload

> Surface tokens never contain hardcoded color values — they always reference palette shades. Changing the palette automatically cascades to all semantic surfaces.

Click any swatch to copy the token name to clipboard.
        `.trim(),
      },
    },
  },
};

export default meta;

export const Default = {
  name: 'Surface Tokens',
};