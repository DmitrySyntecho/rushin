import React from 'react';
import { Svg, IC } from './icons';

export default function MobileCtaBar() {
  return (
    <div
      className="mq-mobile-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 95,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid #E4E8F3',
        padding: '10px 14px calc(10px + env(safe-area-inset-bottom))',
        gap: 10,
      }}
    >
      <a href="tel:+13236451600" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, border: '1.5px solid #C9D2E8', color: '#283778', borderRadius: 12, padding: '13px 8px', fontWeight: 700, fontSize: 13 }}>
        <Svg inner={IC.phone} size={15} sw={2} />
        Call
      </a>
      <a href="#final-cta" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, border: '1.5px solid #C9D2E8', color: '#283778', borderRadius: 12, padding: '13px 8px', fontWeight: 700, fontSize: 13 }}>
        <Svg inner={IC.upload} size={15} sw={2} />
        Upload
      </a>
      <a href="#final-cta" style={{ flex: 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#283778', color: '#FFFFFF', borderRadius: 12, padding: '13px 8px', fontWeight: 700, fontSize: 13 }}>
        Book
      </a>
    </div>
  );
}
