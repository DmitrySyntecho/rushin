'use client';

import React, { useState } from 'react';
import { Svg, IC } from './icons';

const PHONE = '+1 323 645 1600';
const PHONE_HREF = 'tel:+13236451600';

type Pill = { label: string; href: string; icon: string; tint: string };

const SERVICES: Pill[] = [
  { label: 'Russian Visa', href: '#immigration', icon: IC.feather, tint: '#FFF3D6' },
  { label: 'Apostille Services', href: '#international', icon: IC.fileSeal, tint: '#ECEBFB' },
  { label: 'Mobile Notary', href: '#notarization', icon: IC.mapPin, tint: '#DBF3E8' },
  { label: 'Document Translation', href: '#international', icon: IC.scale, tint: '#EAF3D8' },
  { label: 'Live Scan', href: '#immigration', icon: IC.fingerprint, tint: '#DEEEFB' },
  { label: 'Green Card', href: '#immigration', icon: IC.idCard, tint: '#DBF3E8' },
  { label: 'Marriage-Based Green Card', href: '#immigration', icon: IC.heart, tint: '#DBF3E8' },
  { label: 'Green Card Through the Diversity', href: '#immigration', icon: IC.globe, tint: '#F7E3F1' },
  { label: 'Same-Day Marriage Services', href: '#services', icon: IC.heart, tint: '#F7E3F1' },
];

const OFFICES = [
  { name: 'West Hollywood', addr: '7869 Santa Monica Blvd, CA 90046' },
  { name: 'San Diego', addr: '11852 Zach Dr, CA 92128 · By appointment' },
];

function RushLogo({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0 }}>
      <div style={{ width: 42, height: 42, borderRadius: 12, background: onDark ? '#FFFFFF' : '#283778', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span className="font-ub" style={{ fontWeight: 700, fontSize: 21, color: onDark ? '#283778' : '#FFFFFF' }}>R</span>
        <span style={{ position: 'absolute', right: -3, bottom: -3, width: 13, height: 13, borderRadius: '50%', background: '#FFC805', border: '2px solid #FFFFFF' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span className="font-ub" style={{ fontWeight: 700, fontSize: 20, color: '#283778', letterSpacing: '-0.01em' }}>Rush In</span>
        <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', color: '#5B6480', textTransform: 'uppercase', marginTop: 3 }}>Documentation Center</span>
      </div>
    </a>
  );
}

const navLink: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 6, padding: '9px 15px', borderRadius: 10, color: '#FFFFFF', fontSize: 14.5, fontWeight: 600 };

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [officesOpen, setOfficesOpen] = useState(false);
  const [mobServices, setMobServices] = useState(false);
  const [lang, setLang] = useState<'en' | 'ru'>('en');

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 90, background: '#FFFFFF', boxShadow: '0 1px 0 #E4E8F3' }}>
      {/* ---------- TOP INFO BAR (desktop) ---------- */}
      <div className="ri-topbar" style={{ display: 'flex', background: '#FFFFFF', borderBottom: '1px solid #EEF1F8' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', width: '100%', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 28 }}>
          <RushLogo />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {OFFICES.map((o) => (
              <div key={o.name} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Svg inner={IC.mapPin} size={22} stroke="#FFC805" sw={1.9} style={{ flexShrink: 0, marginTop: 1 }} />
                <div style={{ lineHeight: 1.4 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: '#1D2540' }}>{o.name}</div>
                  <div style={{ fontSize: 12.5, color: '#5B6480' }}>{o.addr}</div>
                </div>
              </div>
            ))}
          </div>
          <a href={PHONE_HREF} className="ri-phonebtn" style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#FFC805', color: '#1D2540', padding: '13px 24px', borderRadius: 12, fontWeight: 700, fontSize: 15.5, flexShrink: 0, boxShadow: '0 8px 18px -8px rgba(184,144,10,0.5)' }}>
            <Svg inner={IC.phone} size={18} sw={2.2} />
            {PHONE}
          </a>
        </div>
      </div>

      {/* ---------- MAIN NAV BAR (desktop) ---------- */}
      <div className="ri-desktop-nav" style={{ background: 'linear-gradient(90deg, #283778 0%, #33438D 100%)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', gap: 4 }}>
          <a href="#top" className="ri-navlink" style={navLink}>Home</a>
          <a href="#about" className="ri-navlink" style={navLink}>About</a>

          {/* Services mega dropdown */}
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="ri-navlink" style={{ ...navLink, font: 'inherit', background: 'none', border: 'none', cursor: 'pointer' }}>
              Services
              <Svg inner={IC.chevron} size={13} sw={2.5} style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {servicesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 10, zIndex: 100 }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 20, boxShadow: '0 28px 56px -16px rgba(40,55,120,0.28)', padding: 12, width: 372, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {SERVICES.map((s) => (
                    <a key={s.label} href={s.href} onClick={() => setServicesOpen(false)} className="ri-megapill" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '11px 14px', borderRadius: 14, background: s.tint, color: '#1D2540' }}>
                      <span style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Svg inner={s.icon} size={21} stroke="#283778" sw={1.8} />
                      </span>
                      <span className="font-ub" style={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.25 }}>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#news" className="ri-navlink" style={navLink}>News</a>
          <a href="#contacts" className="ri-navlink" style={navLink}>Contacts</a>

          {/* Our Offices dropdown */}
          <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }} onMouseEnter={() => setOfficesOpen(true)} onMouseLeave={() => setOfficesOpen(false)}>
            <a href="#offices" className="ri-navlink" style={navLink}>
              Our Offices
              <Svg inner={IC.chevron} size={13} sw={2.5} style={{ transform: officesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </a>
            {officesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 10, zIndex: 100 }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 16, boxShadow: '0 24px 48px -14px rgba(40,55,120,0.24)', padding: 8, width: 260, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {OFFICES.map((o) => (
                    <a key={o.name} href="#offices" onClick={() => setOfficesOpen(false)} className="ri-drop" style={{ display: 'flex', gap: 11, padding: '11px 14px', borderRadius: 10 }}>
                      <Svg inner={IC.mapPin} size={18} stroke="#FFC805" sw={2} style={{ flexShrink: 0, marginTop: 1 }} />
                      <span>
                        <span className="font-ub" style={{ display: 'block', fontWeight: 700, fontSize: 14, color: '#1D2540' }}>{o.name}</span>
                        <span style={{ fontSize: 12, color: '#5B6480' }}>{o.addr}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ flex: 1 }} />

          {/* Language toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 15 }}>
            <button onClick={() => setLang('en')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 6px', color: lang === 'en' ? '#FFC805' : 'rgba(255,255,255,0.7)', font: 'inherit' }}>EN</button>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>·</span>
            <button onClick={() => setLang('ru')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 6px', color: lang === 'ru' ? '#FFC805' : 'rgba(255,255,255,0.7)', font: 'inherit' }}>RU</button>
          </div>
        </div>
      </div>

      {/* ---------- MOBILE BAR ---------- */}
      <div className="ri-mobrow" style={{ background: '#FFFFFF', borderBottom: '1px solid #EEF1F8' }}>
        <div style={{ width: '100%', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <RushLogo />
          <div style={{ flex: 1 }} />
          <a href={PHONE_HREF} style={{ display: 'flex', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', borderRadius: 12, background: '#FFC805', color: '#1D2540' }}>
            <Svg inner={IC.phone} size={19} sw={2.2} />
          </a>
          <button onClick={() => setMobileOpen((v) => !v)} aria-label="Menu" style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid #E4E8F3', background: '#FFFFFF', color: '#283778', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Svg inner={mobileOpen ? IC.chevron : IC.menu} size={22} sw={2} style={{ transform: mobileOpen ? 'rotate(180deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {mobileOpen && (
        <div className="ri-mobrow" style={{ background: '#FFFFFF', borderBottom: '1px solid #E4E8F3' }}>
          <div style={{ width: '100%', padding: '8px 20px 22px', display: 'flex', flexDirection: 'column', gap: 2, fontWeight: 600, fontSize: 16 }}>
            <a href="#top" onClick={() => setMobileOpen(false)} className="ri-drop" style={{ padding: '13px 12px', borderRadius: 10, color: '#1D2540' }}>Home</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="ri-drop" style={{ padding: '13px 12px', borderRadius: 10, color: '#1D2540' }}>About</a>

            <button onClick={() => setMobServices((v) => !v)} className="ri-drop" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 12px', borderRadius: 10, background: 'none', border: 'none', font: 'inherit', color: '#1D2540', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
              Services
              <Svg inner={IC.chevron} size={16} stroke="#5B6480" sw={2.5} style={{ transform: mobServices ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {mobServices && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, padding: '4px 0 8px' }}>
                {SERVICES.map((s) => (
                  <a key={s.label} href={s.href} onClick={() => setMobileOpen(false)} className="ri-megapill" style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '11px 14px', borderRadius: 13, background: s.tint, color: '#1D2540' }}>
                    <span style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Svg inner={s.icon} size={19} stroke="#283778" sw={1.8} />
                    </span>
                    <span className="font-ub" style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.25 }}>{s.label}</span>
                  </a>
                ))}
              </div>
            )}

            <a href="#news" onClick={() => setMobileOpen(false)} className="ri-drop" style={{ padding: '13px 12px', borderRadius: 10, color: '#1D2540' }}>News</a>
            <a href="#contacts" onClick={() => setMobileOpen(false)} className="ri-drop" style={{ padding: '13px 12px', borderRadius: 10, color: '#1D2540' }}>Contacts</a>
            <a href="#offices" onClick={() => setMobileOpen(false)} className="ri-drop" style={{ padding: '13px 12px', borderRadius: 10, color: '#1D2540' }}>Our Offices</a>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 12px 4px', fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 16 }}>
              <button onClick={() => setLang('en')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', borderRadius: 8, color: lang === 'en' ? '#283778' : '#8A91A8', font: 'inherit' }}>EN</button>
              <span style={{ color: '#C9D2E8' }}>·</span>
              <button onClick={() => setLang('ru')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', borderRadius: 8, color: lang === 'ru' ? '#283778' : '#8A91A8', font: 'inherit' }}>RU</button>
            </div>

            <a href="#final-cta" onClick={() => setMobileOpen(false)} style={{ marginTop: 10, background: '#FFC805', color: '#1D2540', padding: 16, borderRadius: 12, textAlign: 'center', fontWeight: 700 }}>Get a Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}
