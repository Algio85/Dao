import React, { useState } from 'react';

const FONT = "'DM Sans', system-ui, sans-serif";

const SPACING_TOKENS = {
  xxs:  { value: '4px',  px: 4  },
  xs:   { value: '8px',  px: 8  },
  sm:   { value: '12px', px: 12 },
  md:   { value: '16px', px: 16 },
  lg:   { value: '24px', px: 24 },
  xl:   { value: '32px', px: 32 },
  xxl:  { value: '48px', px: 48 },
  xxxl: { value: '64px', px: 64 },
};

function SpacingRow({ name, value, px }) {
  const [copied, setCopied] = useState(false);
  const tokenName = `spacing.${name}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(tokenName).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <div
      onClick={handleCopy}
      title={`Copy: ${tokenName}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 60px 80px',
        alignItems: 'center',
        gap: 24,
        padding: '10px 16px',
        borderRadius: 8,
        cursor: 'pointer',
        transition: 'background 0.12s',
        background: copied ? '#0f2a1a' : 'transparent',
      }}
      onMouseEnter={e => { if (!copied) e.currentTarget.style.background = '#161616'; }}
      onMouseLeave={e => { if (!copied) e.currentTarget.style.background = 'transparent'; }}
    >
      <span style={{ fontFamily: FONT, fontSize: 12, color: copied ? '#4ade80' : '#888', transition: 'color 0.2s' }}>
        {copied ? '✓ copied' : tokenName}
      </span>

      <div style={{
        height: 20,
        width: px * 2,
        background: 'oklch(62% 0.18 262)',
        borderRadius: 3,
        minWidth: 4,
      }} />

      <span style={{ fontFamily: FONT, fontSize: 12, color: '#555', textAlign: 'right' }}>
        {value}
      </span>

      <span style={{ fontFamily: FONT, fontSize: 11, color: '#333', textAlign: 'right' }}>
        {(px / 16).toFixed(3).replace(/\.?0+$/, '')}rem
      </span>
    </div>
  );
}

export function SpacingScale() {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', padding: '40px 40px', fontFamily: FONT }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" />

      <div style={{ marginBottom: 40 }}>
        <h1 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 300, color: '#fff', letterSpacing: '-0.02em', marginBottom: 4 }}>
          Spacing Scale
        </h1>
        <p style={{ fontFamily: FONT, fontSize: 10, color: '#444', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          8 steps · 4px grid · click row to copy token name
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr 60px 80px',
        gap: 24,
        padding: '0 16px 8px',
        borderBottom: '1px solid #1a1a1a',
        marginBottom: 8,
      }}>
        {['Token', 'Visual', 'px', 'rem'].map(h => (
          <span key={h} style={{
            fontFamily: FONT, fontSize: 9, color: '#333',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            textAlign: h === 'px' || h === 'rem' ? 'right' : 'left',
          }}>{h}</span>
        ))}
      </div>

      {Object.entries(SPACING_TOKENS).map(([name, { value, px }]) => (
        <SpacingRow key={name} name={name} value={value} px={px} />
      ))}
    </div>
  );
}

export default SpacingScale;