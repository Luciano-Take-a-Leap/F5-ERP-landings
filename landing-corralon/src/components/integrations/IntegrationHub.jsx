'use client';
import { useState } from 'react';

const INTEGRATIONS = [
  { name: 'Power BI', bg: '#0078D4', fg: '#F2C811', label: 'BI' },
  { name: 'AFIP', bg: '#1565C0', fg: '#FFFFFF', label: 'AFIP' },
  { name: 'MercadoLibre', bg: '#FFE600', fg: '#1259C3', label: 'ML' },
  { name: 'Mercado Pago', bg: '#009EE3', fg: '#FFFFFF', label: 'MP' },
  { name: 'Mobbex', bg: '#6C3FC5', fg: '#FFFFFF', label: 'MX' },
  { name: 'Payoneer', bg: '#FF4800', fg: '#FFFFFF', label: 'PAY' },
  { name: 'API', bg: '#16213E', fg: '#7EE8FA', label: '{}' },
  { name: 'Tienda Nube', bg: '#00ADEF', fg: '#FFFFFF', label: 'TN' },
  { name: 'WhatsApp', bg: '#25D366', fg: '#FFFFFF', label: 'WA' },
  { name: 'G. Drive', bg: '#EA4335', fg: '#FFFFFF', label: 'GD' },
];

const S = 520,
  CX = 260,
  CY = 260,
  IS = 52;

// ─── Helpers ─────────────────────────────────────────────────────────────────
function polar(r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    x: +(CX + r * Math.cos(rad)).toFixed(1),
    y: +(CY + r * Math.sin(rad)).toFixed(1),
  };
}

function Icon({ item, size = IS, style = {} }) {
  return (
    <div
      title={item.name}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: item.bg,
        color: item.fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: Math.max(9, Math.floor(size * 0.21)),
        fontWeight: 700,
        fontFamily: 'monospace',
        border: '2px solid rgba(255,255,255,.18)',
        boxShadow: `0 0 16px ${item.bg}55`,
        cursor: 'pointer',
        userSelect: 'none',
        ...style,
      }}
    >
      {item.label}
    </div>
  );
}

function Center() {
  return (
    <div
      style={{
        position: 'absolute',
        left: CX - 45,
        top: CY - 45,
        width: 90,
        height: 90,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 38% 38%, #FF6835, #BE3A05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'monospace',
        fontSize: 21,
        fontWeight: 700,
        color: '#fff',
        boxShadow: '0 0 44px rgba(232,71,10,.8), 0 0 88px rgba(232,71,10,.25)',
        zIndex: 20,
      }}
    >
      ERP
    </div>
  );
}

function OrbitalRings(active = 0, dir1 = 1, dir2 = 1, dir3 = 1) {
  const numOrbits = active + 1;

  const getIdxsDependingOnOrbits = (orbit) => {
    if (orbit === 0) {
      if (numOrbits === 1) return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numOrbits === 2) return [0, 1, 2, 3, 4, 5, 6];

      return [0, 1, 2, 3];
    }

    if (orbit === 1) {
      if (numOrbits === 1) return [];

      if (numOrbits === 2) return [7, 8, 9];

      return [4, 5, 6];
    }
    if (orbit === 2) return [7, 8, 9];
    return [];
  };

  const rings = [
    { r: 215, idxs: getIdxsDependingOnOrbits(0), dur: '32s', dir: dir1 },
    { r: 162, idxs: getIdxsDependingOnOrbits(1), dur: '22s', dir: dir2 },
    { r: 105, idxs: getIdxsDependingOnOrbits(2), dur: '14s', dir: dir3 },
  ].slice(0, numOrbits);

  return (
    <div style={{ position: 'relative', width: S, height: S }}>
      <svg style={{ position: 'absolute', inset: 0 }} width={S} height={S}>
        <defs>
          <radialGradient id="orb-rg" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#E8470A" stopOpacity=".1" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width={S} height={S} />
        <circle cx={CX} cy={CY} r={260} fill="url(#orb-rg)" />
        {rings.map((rg, i) => (
          <circle
            key={i}
            cx={CX}
            cy={CY}
            r={rg.r}
            fill="none"
            stroke="rgba(255,255,255,.32)"
            strokeWidth="1"
            strokeDasharray="4 10"
          />
        ))}
      </svg>

      {rings.map((ring, ri) => {
        const spin = ring.dir > 0 ? 'cw' : 'ccw';
        const counter = ring.dir > 0 ? 'ccw' : 'cw';
        return (
          <div
            key={ri}
            style={{
              position: 'absolute',
              inset: 0,
              animation: `${spin} ${ring.dur} linear infinite`,
            }}
          >
            {ring.idxs.map((idx, ii) => {
              const pos = polar(ring.r, (360 / ring.idxs.length) * ii);
              return (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: pos.x - IS / 2,
                    top: pos.y - IS / 2,
                    animation: `${counter} ${ring.dur} linear infinite`,
                  }}
                >
                  <Icon item={INTEGRATIONS[idx]} />
                </div>
              );
            })}
          </div>
        );
      })}

      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 90 + i * 44,
            height: 90 + i * 44,
            top: CY - 45 - i * 22,
            left: CX - 45 - i * 22,
            borderRadius: '50%',
            border: '1px solid rgba(232,71,10,.4)',
            animation: `pulse-out 2.8s ease-out infinite ${(i * 0.8).toFixed(1)}s`,
            pointerEvents: 'none',
          }}
        />
      ))}
      <Center />
    </div>
  );
}

// ─── CSS global necesario ─────────────────────────────────────────────────────
// Agregá esto en tu globals.css (o en un <style> global)
const GLOBAL_CSS = `
@keyframes cw  { to { transform: rotate( 360deg); } }
@keyframes ccw { to { transform: rotate(-360deg); } }
@keyframes pulse-out {
  0%   { transform: scale(1);   opacity: .5; }
  100% { transform: scale(2.5); opacity: 0;  }
}
@keyframes line-glow {
  0%, 100% { opacity: .08; }
  50%       { opacity: .5;  }
}
@keyframes float-a {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}
@keyframes float-b {
  0%, 100% { transform: translate(0, 0); }
  50%       { transform: translate(8px, -8px); }
}
@keyframes float-c {
  0%, 100% { transform: translate(0, 0); }
  33%       { transform: translate(-7px, -10px); }
  66%       { transform: translate(10px, 6px); }
}
@keyframes radar-rot  { to { transform: rotate(360deg); } }
@keyframes radar-blip {
  0%, 100% { opacity: .4; }
  50%       { opacity: 1;  }
}
`;

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────

export default function IntegrationHub() {
  const [active, setActive] = useState(0);
  const [dir1, setDir1] = useState(1);
  const [dir2, setDir2] = useState(1);
  const [dir3, setDir3] = useState(1);
  const VARIANTS = [
    { label: '1 órbita', Comp: () => OrbitalRings(0, dir1, dir2, dir3) },
    { label: '2 órbitas', Comp: () => OrbitalRings(1, dir1, dir2, dir3) },
    { label: '3 órbitas', Comp: () => OrbitalRings(2, dir1, dir2, dir3) },
  ];
  const { Comp } = VARIANTS[active];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
      }}
    >
      <style>{GLOBAL_CSS}</style>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          justifyContent: 'center',
          padding: 4,
          borderRadius: 12,
          marginBottom: 32,
        }}
      >
        {VARIANTS.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '7px 16px',
              border: 'none',
              cursor: 'pointer',
              background: active === i ? '#E8470A' : 'transparent',
              color: active === i ? '#fff' : 'rgba(255,255,255,.4)',
              fontFamily: 'system-ui, sans-serif',
              fontSize: 13,
              fontWeight: 500,
              borderRadius: 8,
              transition: 'all .2s',
            }}
          >
            {v.label}
          </button>
        ))}
      </div>

      {/* Orbit direction controls */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          justifyContent: 'center',
          padding: 4,
          borderRadius: 12,
          marginBottom: 32,
        }}
      >
        {[1, 2, 3].map((orbit) => (
          <div key={orbit} style={{ display: 'flex', gap: 6 }}>
            <button
              onClick={() => orbit === 1 ? setDir1(dir1 * -1) : orbit === 2 ? setDir2(dir2 * -1) : setDir3(dir3 * -1)}
              style={{
                padding: '7px 16px',
                border: 'none',
                cursor: 'pointer',
                background: '#E8470A',
                color: '#fff',
                fontFamily: 'system-ui, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 8,
                transition: 'all .2s',
              }}
            >
              Orbit {orbit} {orbit === 1 && dir1 > 0 || orbit === 2 && dir2 > 0 || orbit === 3 && dir3 > 0 ? '→' : '←'}
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        <Comp />
      </div>
    </div>
  );
}
