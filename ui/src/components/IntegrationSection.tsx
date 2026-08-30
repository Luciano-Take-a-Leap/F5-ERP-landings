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

type CanvasConfig = {
  S: number;
  CX: number;
  CY: number;
  IS: number;
  glowR: number;
  orbits: { r: number; dur: string }[];
};

// Mobile keeps the original (smaller) canvas/orbit sizing so nothing changes
// on small screens; desktop uses the larger canvas so outer-orbit icons
// don't get clipped.
const MOBILE_CONFIG: CanvasConfig = {
  S: 660,
  CX: 330,
  CY: 330,
  IS: 52,
  glowR: 260,
  orbits: [
    { r: 275, dur: '32s' },
    { r: 222, dur: '24s' },
    { r: 172, dur: '18s' },
  ],
};

const DESKTOP_CONFIG: CanvasConfig = {
  S: 800,
  CX: 400,
  CY: 400,
  IS: 52,
  glowR: 315,
  orbits: [
    { r: 350, dur: '32s' },
    { r: 275, dur: '24s' },
    { r: 200, dur: '18s' },
  ],
};

// Matches the `md` breakpoint already used by the section wrapper below.
const MOBILE_BREAKPOINT = 768;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    x: +(cx + r * Math.cos(rad)).toFixed(1),
    y: +(cy + r * Math.sin(rad)).toFixed(1),
  };
}

function ItemIcon({ item, size }: { item: OrbitItem; size: number }) {
  return (
    <div
      title={item?.altText}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none',
        background: 'rgba(255,255,255,1)',
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

function Center({ mainImage, cx, cy }: { mainImage?: string; cx: number; cy: number }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: cx - 90,
        top: cy - 90,
        width: 180,
        height: 180,
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

function OrbitalCanvas({
  orbits,
  mainImage,
  config,
}: {
  orbits: Orbit[];
  mainImage?: string;
  config: CanvasConfig;
}) {
  const { S, CX, CY, IS, glowR } = config;
  const rings = orbits.slice(0, config.orbits.length).map((orbit, i) => ({
    ...config.orbits[i],
    orbit,
  }));

  return (
    <div style={{ position: 'relative', width: S, height: S }}>
      {/* SVG: background and guide rings */}
      <svg style={{ position: 'absolute', inset: 0 }} width={S} height={S}>
        <rect width={S} height={S} />
        <circle cx={CX} cy={CY} r={glowR} fill="url(#orb-rg)" />
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

      {/* Orbital rings */}
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
              const pos = polar(CX, CY, ring.r, (360 / (ring.orbit.items?.length || 1)) * ii);
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
                  <ItemIcon item={item} size={IS} />
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Pulse */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="orbit-pulse"
          style={
            {
              width: 180 + i * 44,
              height: 180 + i * 44,
              top: CY - 90 - i * 22,
              left: CX - 90 - i * 22,
              '--orbit-delay': `${(i * 0.8).toFixed(1)}s`,
            } as React.CSSProperties
          }
        />
      ))}

      <Center mainImage={mainImage} cx={CX} cy={CY} />
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
  const [config, setConfig] = useState<CanvasConfig>(DESKTOP_CONFIG);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      const available = entry.contentRect.width;
      const cfg = available < MOBILE_BREAKPOINT ? MOBILE_CONFIG : DESKTOP_CONFIG;
      setConfig(cfg);
      setScale(Math.min(1, available / cfg.S));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  if (!data?.length) return null;

  return (
    <section
      className="w-full max-w-7xl px-6 md:px-0 "
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
      <h2 className="text-4xl font-extrabold tracking-tight my-6 text-center">{title}</h2>
      <div
        ref={wrapperRef}
        style={{
          width: '100%',
          maxWidth: config.S,
          height: config.S * scale,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            width: config.S,
            height: config.S,
            flexShrink: 0,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
        >
          <OrbitalCanvas orbits={data} mainImage={mainImage} config={config} />
        </div>
      </div>
    </section>
  );
}
