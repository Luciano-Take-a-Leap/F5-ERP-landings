'use client';

import { useEffect, useRef, useState } from 'react';

type OrbitItem = {
  key: string;
  image?: string;
  altText?: string;
};

type Orbit = {
  key: string;
  direction?: 'clockwise' | 'counterclockwise';
  items?: OrbitItem[];
};

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const S = 520;
const CX = 260;
const CY = 260;
const IS = 52;

const ORBIT_CONFIG = [
  { r: 215, dur: '32s' },
  { r: 162, dur: '24s' },
  { r: 112, dur: '18s' },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function polar(r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    x: +(CX + r * Math.cos(rad)).toFixed(1),
    y: +(CY + r * Math.sin(rad)).toFixed(1),
  };
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function ItemIcon({ item, size = IS }: { item: OrbitItem; size?: number }) {
  return (
    <div
      title={item?.altText}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none',
        background: 'rgba(255,255,255,0.05)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {item?.image && (
        <img
          src={item.image}
          alt={item.altText}
          style={{ width: '80%', height: '80%', objectFit: 'contain' }}
          draggable={false}
        />
      )}
      {item?.altText && !item?.image && (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            fontSize: 10,
            color: '#fff',
            textAlign: 'center',
            padding: 4,
          }}
        >
          {item.altText}
        </span>
      )}
    </div>
  );
}

function Center({ mainImage }: { mainImage?: string }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: CX - 45,
        top: CY - 45,
        width: 90,
        height: 90,
        borderRadius: '50%',
        background:
          'radial-gradient(circle at 38% 38%, var(--color-primary), var(--color-primary) 1px, transparent 99%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 0 44px var(--color-primary), 0 0 88px var(--color-primary)',
        zIndex: 20,
      }}
    >
      <img
        src={mainImage}
        alt="Main"
        style={{ width: '60%', height: '60%', objectFit: 'contain' }}
      />
    </div>
  );
}

function OrbitalCanvas({ orbits, mainImage }: { orbits: Orbit[]; mainImage?: string }) {
  const rings = orbits.slice(0, ORBIT_CONFIG.length).map((orbit, i) => ({
    ...ORBIT_CONFIG[i],
    orbit,
  }));

  return (
    <div style={{ position: 'relative', width: S, height: S }}>
      {/* SVG: fondo y anillos guía */}
      <svg style={{ position: 'absolute', inset: 0 }} width={S} height={S}>
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

      {/* Anillos orbitales */}
      {rings.map((ring, ri) => {
        const isCCW = ring.orbit.direction?.includes('counterclockwise');
        const spinAnim = isCCW ? 'ccw' : 'cw';
        const counterAnim = isCCW ? 'cw' : 'ccw';

        return (
          <div
            key={ring.orbit.key}
            className="orbit-ring"
            style={
              {
                '--orbit-anim': spinAnim,
                '--orbit-dur': ring.dur,
              } as React.CSSProperties
            }
          >
            {ring.orbit.items?.map((item, ii) => {
              const pos = polar(ring.r, (360 / (ring.orbit.items?.length || 1)) * ii);
              return (
                <div
                  key={item.key}
                  className="orbit-item"
                  style={
                    {
                      left: pos.x - IS / 2,
                      top: pos.y - IS / 2,
                      '--orbit-counter-anim': counterAnim,
                      '--orbit-dur': ring.dur,
                    } as React.CSSProperties
                  }
                >
                  <ItemIcon item={item} />
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Pulso del centro */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="orbit-pulse"
          style={
            {
              width: 90 + i * 44,
              height: 90 + i * 44,
              top: CY - 45 - i * 22,
              left: CX - 45 - i * 22,
              '--orbit-delay': `${(i * 0.8).toFixed(1)}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <Center mainImage={mainImage} />
    </div>
  );
}

interface IntegrationSectionProps {
  title: React.ReactNode;
  data: Orbit[];
  mainImage?: string;
}

export default function IntegrationSection({
  title,
  data,
  mainImage,
}: IntegrationSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      const available = entry.contentRect.width;
      setScale(Math.min(1, available / S));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (!data?.length) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <h2 className="text-2xl font-semibold tracking-tight mb-2">{title}</h2>
      <div
        ref={wrapperRef}
        style={{
          width: '100%',
          maxWidth: S,
          height: S * scale,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            width: S,
            height: S,
            flexShrink: 0,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
        >
          <OrbitalCanvas orbits={data} mainImage={mainImage} />
        </div>
      </div>
    </div>
  );
}
