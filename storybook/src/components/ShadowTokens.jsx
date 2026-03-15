import React, { useState } from 'react';

const FONT = "'DM Sans', system-ui, sans-serif";

const SHADOW_COLOR = 'rgba(0, 0, 0, 0.10)';

const PRESETS = [
  { name: 'xs', label: 'Surface', description: 'Cards, panels, surface-level elements', keyLight: '0px 1px 4px 0px', ambient: '0px 2px 8px 0px' },
  { name: 'sm', label: 'Non-modal', description: 'Non-modal elements like dropdowns, tooltips', keyLight: '0px 2px 8px 0px', ambient: '0px 3px 12px 0px' },
  { name: 'md', label: 'Sticky', description: 'Sticky headers, floating action bars', keyLight: '0px 3px 12px 0px', ambient: '0px 4px 16px 0px' },
  { name: 'lg', label: 'Non-modal sticky', description: 'Non-modal elements on sticky surfaces', keyLight: '0px 4px 16px 0px', ambient: '0px 5px 20px 0px' },
  { name: 'xl', label: 'Modal', description: 'Modals, dialogs, drawers', keyLight: '0px 2px 8px 0px', ambient: '0px 6px 24px 0px' },
];

function ShadowRow({ name, label, description, keyLight, ambient }) {
  const [copied, setCopied] = useState(false);
  const tokenName = `shadow.${name}`;
  const boxShadow = `${keyLight} ${SHADOW_COLOR}, ${ambient} ${SHADOW_COLOR}`;

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
        gridTemplateColumns: '120px 140px 1fr 200px',
        alignItems: 'center',
        gap: 24,
        padding: '16px 16px',
        borderRadius: 8,
        cursor: 'pointer',
        transition: 'background 0.12s',
        background: copied ? '#f0fdf4' : 'transparent',
        borderBottom: '1px solid #ebebeb',
      }}
      onMouseEnter={e => { if (!copied) e.currentTarget.style.background = '#f5f5f5'; }}
      onMouseLeave={e => { if (!copied) e.currentTarget.style.background = copied ? '#f0fdf4' : 'transparent'; }}
    >
      <span style={{ fontFamily: FONT, fontSize: 11, color: copied ? '#16a34a' : '#888', transition: 'color 0.2s' }}>
        {copied ? '✓ copied' : tokenName}
      </span>
      <div>
        <div style={{ fontFamily: FONT, fontSize: 12, color: '#111', marginBottom: 2 }}>{label}</div>
        <div style={{ fontFamily: FONT, fontSize: 10, color: '#aaa' }}>{description}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontFamily: FONT, fontSize: 10, color: '#bbb' }}>
          <span style={{ color: '#999', marginRight: 6 }}>key</span>{keyLight}
        </div>
        <div style={{ fontFamily: FONT, fontSize: 10, color: '#bbb' }}>
          <span style={{ color: '#999', marginRight: 6 }}>ambient</span>{ambient}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', background: '#ffffff', borderRadius: 10, padding: '12px 16px' }}>
        <div style={{ width: 120, height: 64, backgund: '#fff', borderRadius: 8, boxShadow }} />
      </div>
    </div>
  );
}

export function ShadowTokens() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '40px 40px', fontFamily: FONT }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" />
      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 300, color: '#111', letterSpacing: '-0.02em', marginBottom: 4 }}>Shadow Tokens</h1>
        <p style={{ fontFamily: FONT, fontSize: 10, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          5 elevation presets · key + ambient layers · click row to copy token name
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '120px 140px 1fr 200px', gap: 24, padding: '0 16px 8px', borderBottom: '1px solid #e5e5e5', marginBottom: 0 }}>
        {['Token', 'Preset', 'Values', 'Preview'].map(h => (
          <span key={h}tyle={{ fontFamily: FONT, fontSize: 9, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</span>
        ))}
      </div>
      {PRESETS.map(({ name, ...rest }) => (
        <ShadowRow key={name} name={name} {...rest} />
      ))}
    </div>
  );
}

export default ShadowTokens;
