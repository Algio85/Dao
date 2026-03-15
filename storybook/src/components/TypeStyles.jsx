import React, { useState } from 'react';
import typographyTokens from '../tokens/semantic/typography.json';
import typographyBase from '../tokens/shades.json';

const FONT = "'DM Sans', system-ui, sans-serif";

const STYLES = [
  'display',
  'title-1', 'title-2', 'title-3', 'title-4',
  'body', 'body-sm',
  'label', 'label-sm'
];

const WEIGHTS = ['light', 'regular', 'bold'];

const PREVIEW_TEXT = 'The quick brown fox';

// Resolve typography size references from base tokens
function resolveSize(ref) {
  const match = ref?.match?.(/^\{typography\.size\.(\w+)\}$/);
  if (!match) return ref;
  // Read from typography.json base if available, fallback to hardcoded
  const SIZE_MAP = { xs: '11px', sm: '13px', md: '16px', lg: '19px', xl: '23px', xxl: '28px', xxxl: '33px' };
  return SIZE_MAP[match[1]] ?? ref;
}

function StyleRow({ styleName }) {
  const [copied, setCopied] = useState(null);

  return (
    <div style={{ borderBottom: '1px solid #ebebeb' }}>
      {WEIGHTS.map(weight => {
        const token = typographyTokens.text[styleName]?.[weight];
        const fontSize = resolveSize(token?.$value?.fontSize);
        const fontWeight = token?.$value?.fontWeight;
        const lineHeight = token?.$value?.lineHeight;
        const tokenName = `text.${styleName}.${weight}`;

        const handleCopy = () => {
          navigator.clipboard?.writeText(tokenName).then(() => {
            setCopied(weight);
            setTimeout(() => setCopied(null), 1400);
          });
        };

        return (
          <div
            key={weight}
            onClick={handleCopy}
            title={`Copy: ${tokenName}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 80px 60px 60px 60px 1fr',
              alignItems: 'center',
              gap: 16,
              padding: '10px 16px',
              cursor: 'pointer',
              transition: 'background 0.12s',
              background: copied === weight ? '#f0fdf4' : 'transparent',
            }}
            onMouseEnter={e => { if (copied !== weight) e.currentTarget.style.background = '#f5f5f5'; }}
            onMouseLeave={e => { if (copied !== weight) e.currentTarget.style.background = 'transparent'; }}
          >
            <span style={{ fontFamily: FONT, fontSize: 10, color: copied === weight ? '#16a34a' : '#bbb', transition: 'color 0.2s' }}>
              {copied === weight ? '✓ copied' : tokenName}
            </span>
            <span style={{ fontFamily: FONT, fontSize: 10, color: '#ccc', textTransform: 'capitalize' }}>{weight}</span>
            <span style={{ fontFamily: FONT, fontSize: 10, color: '#bbb' }}>{fontSize}</span>
            <span style={{ fontFamily: FONT, fontSize: 10, color: '#bbb' }}>{fontWeight}</span>
            <span style={{ fontFamily: FONT, fontSize: 10, color: '#bbb' }}>{lineHeight}</span>
            <span style={{
              fontFamily: FONT,
              fontSize,
              fontWeight,
              lineHeight,
              color: '#111',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {PREVIEW_TEXT}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function TypeStyles() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '40px 40px', fontFamily: FONT }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap" />

      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 300, color: '#111', letterSpacing: '-0.02em', marginBottom: 4 }}>
          Type Styles
        </h1>
        <p style={{ fontFamily: FONT, fontSize: 10, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          9 styles · 3 weights each · click row to copy token name
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '120px 80px 60px 60px 60px 1fr', gap: 16, padding: '0 16px 8px', borderBottom: '1px solid #e5e5e5', marginBottom: 0 }}>
        {['Token', 'Weight', 'Size', 'Weight', 'Line-h', 'Preview'].map((h, i) => (
          <span key={i} style={{ fontFamily: FONT, fontSize: 9, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</span>
        ))}
      </div>

      {STYLES.map(styleName => (
        <div key={styleName}>
          <div style={{ padding: '8px 16px 4px', background: '#ebebeb', marginTop: 8 }}>
            <span style={{ fontFamily: FONT, fontSize: 9, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{styleName}</span>
          </div>
          <StyleRow styleName={styleName} />
        </div>
      ))}
    </div>
  );
}

export default TypeStyles;