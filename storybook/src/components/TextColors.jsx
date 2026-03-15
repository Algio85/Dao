import React, { useState } from 'react';
import { resolveTokens } from '../tokens/resolve.js';
import textTokens from '../tokens/semantic/text.json';
import shades from '../tokens/shades.json';

const FONT = "'DM Sans', system-ui, sans-serif";

const resolved = resolveTokens(textTokens, '', shades);

const TOKENS = [
  { name: 'default',  group: 'Neutral' },
  { name: 'subtle',   group: 'Neutral' },
  { name: 'subtlest', group: 'Neutral' },
  { name: 'inverse',  group: 'Neutral' },
  { name: 'brand-1',  group: 'Role' },
  { name: 'brand-2',  group: 'Role' },
  { name: 'brand-3',  group: 'Role' },
  { name: 'success',  group: 'Role' },
  { name: 'danger',   group: 'Role' },
  { name: 'alert',    group: 'Role' },
  { name: 'info',     group: 'Role' },
  { name: 'news',     group: 'Role' },
  { name: 'ai',       group: 'Role' },
];

function TextRow({ name }) {
  const [copied, setCopied] = useState(false);
  const tokenName = `text.${name}`;
  const value = resolved[tokenName];

  const handleCopy = () => {
    navigator.clipboard?.writeText(tokenName).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };

  const isInverse = name === 'inverse';

  return (
    <div
      onClick={handleCopy}
      title={`Copy: ${tokenName}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '160px 140px 1fr',
        alignItems: 'center',
        gap: 24,
        padding: '12px 16px',
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

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 6,
          background: value,
          border: '1px solid rgba(0,0,0,0.08)',
          flexShrink: 0,
        }} />
        <span style={{ fontFamily: FONT, fontSize: 10, color: '#bbb' }}>{value}</span>
      </div>

      <div style={{
        padding: '8px 12px',
        borderRadius: 6,
        background: isInverse ? '#111' : '#fff',
        border: '1px solid #ebebeb',
      }}>
        <span style={{
          fontFamily: FONT,
          fontSize: 14,
          color: value,
        }}>
          The quick brown fox jumps over the lazy dog
        </span>
      </div>
    </div>
  );
}

export function TextColors() {
  const groups = [...new Set(TOKENS.map(t => t.group))];

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '40px 40px', fontFamily: FONT }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" />

      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 300, color: '#111', letterSpacing: '-0.02em', marginBottom: 4 }}>
          Text Colors
        </h1>
        <p style={{ fontFamily: FONT, fontSize: 10, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Semantic text colors · click row to copy token name
        </p>
      </div>

      {groups.map(group => (
        <div key={group} style={{ marginBottom: 48 }}>
          <div style={{ padding: '6px 16px', background: '#ebebeb', borderRadius: 6, marginBottom: 0, display: 'inline-block', marginBottom: 8 }}>
            <span style={{ fontFamily: FONT, fontSize: 9, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{group}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '160px 140px 1fr', gap: 24, padding: '0 16px 8px', borderBottom: '1px solid #e5e5e5', marginBottom: 0 }}>
            {['Token', 'Value', 'Preview'].map(h => (
              <span key={h} style={{ fontFamily: FONT, fontSize: 9, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</span>
            ))}
          </div>

          {TOKENS.filter(t => t.group === group).map(({ name }) => (
            <TextRow key={name} name={name} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default TextColors;