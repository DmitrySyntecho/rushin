'use client';

import React, { useState } from 'react';
import { Svg, IC } from './icons';

const CTA_LABEL = 'Get a Quote';
const PHONE = '+1 323 645 1600';
const PHONE_HREF = 'tel:+13236451600';

function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 11,
          background: onDark ? '#FFFFFF' : '#283778',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <span className="font-ub" style={{ fontWeight: 700, fontSize: 20, color: onDark ? '#283778' : '#FFFFFF' }}>
          R
        </span>
        <span
          style={{
            position: 'absolute',
            right: -3,
            bottom: -3,
            width: 13,
            height: 13,
            borderRadius: '50%',
            background: '#FFC805',
            border: `2px solid ${onDark ? '#1B2450' : '#FFFFFF'}`,
          }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span className="font-ub" style={{ fontWeight: 700, fontSize: 18, color: onDark ? '#FFFFFF' : '#283778', letterSpacing: '-0.01em' }}>
          Rush In
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: onDark ? '#8A93BC' : '#5B6480',
            textTransform: 'uppercase',
            marginTop: 3,
          }}
        >
          Documentation Center
        </span>
      </div>
    </a>
  );
}

const navLink: React.CSSProperties = { padding: '10px 14px', borderRadius: 10, color: '#1D2540' };
const dropLink: React.CSSProperties = { padding: '10px 14px', borderRadius: 10, fontWeight: 500, fontSize: 14 };
const mobLink: React.CSSProperties = { padding: '14px 12px', borderRadius: 10 };

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ru'>('en');

  const langBase: React.CSSProperties = {
    padding: '7px 12px',
    border: 'none',
    cursor: 'pointer',
    font: 'inherit',
    fontWeight: 700,
    fontSize: 12,
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 90,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid #E4E8F3',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', height: 76, display: 'flex', alignItems: 'center', gap: 28 }}>
        <Logo />

        <nav className="mq-desktop" style={{ alignItems: 'center', gap: 4, fontSize: 14, fontWeight: 600, flex: 1 }}>
          <a href="#top" className="ri-nav" style={navLink}>
            Home
          </a>
          <a href="#about" className="ri-nav" style={navLink}>
            About
          </a>
          <div style={{ position: 'relative' }} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="ri-nav"
              style={{ ...navLink, font: 'inherit', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              Services
              <Svg inner={IC.chevron} size={12} sw={2.5} />
            </button>
            {servicesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 8, width: 280 }}>
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E4E8F3',
                    borderRadius: 16,
                    boxShadow: '0 24px 48px -12px rgba(40,55,120,0.18)',
                    padding: 8,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <a href="#immigration" className="ri-drop" style={dropLink}>Russian Visa</a>
                  <a href="#international" className="ri-drop" style={dropLink}>Apostille Services</a>
                  <a href="#notarization" className="ri-drop" style={dropLink}>Mobile Notary</a>
                  <a href="#international" className="ri-drop" style={dropLink}>Document Translation</a>
                  <a href="#immigration" className="ri-drop" style={dropLink}>Live Scan</a>
                  <a href="#immigration" className="ri-drop" style={dropLink}>Green Card</a>
                  <a href="#immigration" className="ri-drop" style={dropLink}>Marriage-Based Green Card</a>
                  <a href="#services" className="ri-drop" style={dropLink}>Same-Day Marriage Services</a>
                </div>
              </div>
            )}
          </div>
          <a href="#news" className="ri-nav" style={navLink}>News</a>
          <a href="#contacts" className="ri-nav" style={navLink}>Contacts</a>
          <a href="#offices" className="ri-nav" style={navLink}>Our Offices</a>
        </nav>

        <div className="mq-desktop" style={{ alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <div style={{ display: 'flex', border: '1px solid #E4E8F3', borderRadius: 10, overflow: 'hidden', fontSize: 12, fontWeight: 700 }}>
            <button
              onClick={() => setLang('en')}
              style={{ ...langBase, background: lang === 'en' ? '#283778' : '#FFFFFF', color: lang === 'en' ? '#FFFFFF' : '#5B6480' }}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ru')}
              style={{ ...langBase, background: lang === 'ru' ? '#283778' : '#FFFFFF', color: lang === 'ru' ? '#FFFFFF' : '#5B6480' }}
            >
              RU
            </button>
          </div>
          <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14, color: '#283778' }}>
            <Svg inner={IC.phone} size={18} sw={2} />
            {PHONE}
          </a>
          <a
            href="#final-cta"
            className="ri-cta"
            style={{
              background: '#283778',
              color: '#FFFFFF',
              padding: '12px 22px',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 14,
              boxShadow: '0 8px 16px -6px rgba(40,55,120,0.4)',
            }}
          >
            {CTA_LABEL}
          </a>
        </div>

        <div className="mq-mobile" style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: 12 }}>
          <a
            href={PHONE_HREF}
            style={{ display: 'flex', width: 42, height: 42, alignItems: 'center', justifyContent: 'center', borderRadius: 12, background: '#F2F5FB', color: '#283778' }}
          >
            <Svg inner={IC.phone} size={18} sw={2} />
          </a>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            style={{ width: 42, height: 42, borderRadius: 12, border: '1px solid #E4E8F3', background: '#FFFFFF', color: '#283778', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Svg inner={IC.menu} size={20} sw={2} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E4E8F3', padding: '12px 24px 24px', display: 'flex', flexDirection: 'column', gap: 2, fontWeight: 600, fontSize: 16 }}>
          <a href="#top" onClick={() => setMobileOpen(false)} className="ri-drop" style={mobLink}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="ri-drop" style={mobLink}>About</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="ri-drop" style={mobLink}>Services</a>
          <a href="#news" onClick={() => setMobileOpen(false)} className="ri-drop" style={mobLink}>News</a>
          <a href="#contacts" onClick={() => setMobileOpen(false)} className="ri-drop" style={mobLink}>Contacts</a>
          <a href="#offices" onClick={() => setMobileOpen(false)} className="ri-drop" style={mobLink}>Our Offices</a>
          <a href="#final-cta" onClick={() => setMobileOpen(false)} style={{ marginTop: 12, background: '#283778', color: '#FFFFFF', padding: 16, borderRadius: 12, textAlign: 'center', fontWeight: 700 }}>
            {CTA_LABEL}
          </a>
        </div>
      )}
    </header>
  );
}

export { Logo, CTA_LABEL, PHONE, PHONE_HREF };
