import React from 'react';
import { FloatingPaths } from '@/components/ui/background-paths';

export default function Hero3DBackground() {
  return (
    <div
      className="hero-floating-paths-bg"
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        color: 'rgba(255, 255, 255, 0.85)'
      }}
    >
      {/* Ambient Radial Spotlight (Electric Cyan & Campus Amber Glow) */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '780px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(255, 107, 0, 0.08) 45%, transparent 75%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />

      {/* Floating Animated Paths (Left & Right Symmetric Curves) */}
      <div className="absolute inset-0" style={{ position: 'absolute', inset: 0 }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Subtle Bottom & Edge Fade into the Ground Canvas (#0c0c0f) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 95% 80% at 50% 30%, transparent 40%, rgba(12, 12, 15, 0.8) 75%, #0c0c0f 98%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
