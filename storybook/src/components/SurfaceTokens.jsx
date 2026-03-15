import React, { useState } from 'react';
import { resolveTokens } from '../tokens/resolve.js';
import surfaceTokens from '../tokens/semantic/surfaces.json';
import shades from '../tokens/shades.json';

const FONT = "'DM Sans', system-ui, sans-serif";

const resolved = resolveTokens(surfaceTokens, '', shades);

const ROLES = [
  'brand-1', 'brand-2', 'brand-3',
  'success', 'danger', 'alert',
  'info', 'news', 'ai', 'neutral'
];

const VARIANTS = ['subtlest', 'subtle', 'default', 'bold', 'strong', 'strongest'];

function SwatchCell({ role, variant }) {
  const [copied, setCopied] = useState(false);
  const tokenName = `surface.${role}.${variant}`;
  const value = resolved[tokenName];

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
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer' }}
    >
      <div style={{
        width: '100%', height: 40,
        borderRadius: 8,
        background: value,
        border: '1px solid rgba(0,0,0,0.06)',
      }} />
      <div style={{ fontFamily: FONT, fontSize: 9, color: copied ? '#16a34a' : '#bbb', textAlign: 'center', transition: 'color 0.2s' }}>
        {copied ? '✓' : variant}
      </div>
    </div>
  );
}

function SurfaceRow({ role }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '100px repeat(6, 1fr)',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderBottom: '1px solid #ebebeb',
    }}>
      <span style={{ fontFamily: FONT, fontSize: 12, color: '#555', textTransform: 'capitalize' }}>{role}</span>
      {VARIANTS.map(variant => (
        <SwatchCell key={variant} role={role} variant={variant} />
      ))}
    </div>
  );
}

export function SurfaceTokens() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '40px 40px', fontFamily: FONT }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&display=swap" />

      <div style={{ marginBottom: 48 }}>
        <h1 style={{ fontFamily: FONT, fontSize: 26, fontWeight: 300, color: '#111', letterSpacing: '-0.02em', marginBottom: 4 }}>
          Surface Tokens
        </h1>
        <p style={{ fontFamily: FONT, fontSize: 10, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Semantic surfaces · 6 variants per role · click to copy token name
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(6, 1fr)', gap: 12, padding: '0 16px 8px', borderBottom: '1px solid #e5e5e5', marginBottom: 0 }}>
        {['Role', ...VARIANTS].map(h => (
          <span key={h} style={{ fontFamily: FONT, fontSize: 9, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: h === 'Role' ? 'left' : 'center' }}>{h}</span>
        ))}
      </div>

      {ROLES.map(role => (
        <SurfaceRow key={role} role={role} />
      ))}
    </div>
  );
}

export default SurfaceTokens;