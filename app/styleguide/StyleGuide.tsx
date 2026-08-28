'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Svg, IC } from '@/components/icons';

/* ============================================================= helpers */
function useCopy() {
  const [msg, setMsg] = useState<string | null>(null);
  const t = useRef<number>(0);
  const copy = (text: string, label?: string) => {
    navigator.clipboard?.writeText(text).then(() => {
      setMsg(`Copied ${label ?? text}`);
      window.clearTimeout(t.current);
      t.current = window.setTimeout(() => setMsg(null), 1400);
    });
  };
  return { copy, msg };
}

const CopyCtx = React.createContext<(t: string, l?: string) => void>(() => {});
const useC = () => React.useContext(CopyCtx);

function Section({ id, num, eyebrow, title, lead, children }: { id: string; num: string; eyebrow: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="sg-section" data-sg-section>
      <div className="sg-eyebrow"><span>{num}</span> {eyebrow}</div>
      <h2 className="sg-h2">{title}</h2>
      {lead && <p className="sg-lead">{lead}</p>}
      {children}
    </section>
  );
}

/* ============================================================= data (mirrors design-tokens) */
const COLOR_GROUPS: { title: string; items: { v: string; hex: string; name: string; on?: string }[] }[] = [
  { title: 'Primary — navy', items: [
    { v: 'brand-primary', hex: '#283778', name: 'Primary' },
    { v: 'brand-primary-hover', hex: '#33438D', name: 'Primary hover' },
    { v: 'brand-primary-deep', hex: '#1D2A5E', name: 'Deep navy' },
    { v: 'brand-ink', hex: '#1D2540', name: 'Ink / text' },
  ]},
  { title: 'Accent — gold', items: [
    { v: 'brand-accent', hex: '#FFC805', name: 'Accent gold', on: '#1D2540' },
    { v: 'brand-accent-hover', hex: '#FFD84D', name: 'Accent hover', on: '#1D2540' },
    { v: 'brand-gold-logo', hex: '#FFD300', name: 'Logo gold', on: '#1D2540' },
  ]},
  { title: 'Blue accents', items: [
    { v: 'brand-blue', hex: '#4AA4EA', name: 'Sky blue', on: '#1D2540' },
    { v: 'brand-blue-soft', hex: '#8FBEF0', name: 'Soft blue', on: '#1D2540' },
  ]},
  { title: 'Neutrals & surfaces', items: [
    { v: 'surface', hex: '#FFFFFF', name: 'Surface', on: '#1D2540' },
    { v: 'surface-1', hex: '#F6F8FC', name: 'Surface 1', on: '#1D2540' },
    { v: 'surface-2', hex: '#F2F5FB', name: 'Surface 2', on: '#1D2540' },
    { v: 'surface-3', hex: '#EEF1F8', name: 'Surface 3', on: '#1D2540' },
    { v: 'border', hex: '#E4E8F3', name: 'Border', on: '#1D2540' },
    { v: 'border-strong', hex: '#C9D2E8', name: 'Border strong', on: '#1D2540' },
  ]},
  { title: 'Text', items: [
    { v: 'text-muted', hex: '#5B6480', name: 'Muted' },
    { v: 'text-subtle', hex: '#8A91A8', name: 'Subtle' },
  ]},
  { title: 'Dark surfaces', items: [
    { v: 'brand-navy-hero', hex: '#151C40', name: 'Hero navy' },
    { v: 'brand-navy-footer', hex: '#1B2450', name: 'Footer navy' },
  ]},
  { title: 'Status', items: [
    { v: 'success', hex: '#2E7D46', name: 'Success' },
    { v: 'success-bg', hex: '#F0F9EE', name: 'Success bg', on: '#2E7D46' },
    { v: 'warn-border', hex: '#F5E3A0', name: 'Warn border', on: '#6B5407' },
    { v: 'warn-bg', hex: '#FFF9E6', name: 'Warn bg', on: '#6B5407' },
  ]},
];

const GRADIENTS = [
  { v: 'grad-primary', css: 'linear-gradient(90deg, #283778 0%, #33438D 100%)' },
  { v: 'grad-hero', css: 'linear-gradient(105deg, #12193a 0%, #161f48 40%, #1d2a5e 70%, #1d2a5e 100%)' },
  { v: 'grad-urgent', css: 'linear-gradient(120deg, #1D2A5E 0%, #283778 55%, #33438D 100%)' },
  { v: 'grad-cta', css: 'linear-gradient(135deg, #F6F8FC 0%, #EAF2FC 60%, #FFF6DC 130%)' },
  { v: 'grad-gold', css: 'linear-gradient(150deg, #FFD300 0%, #F8A600 55%, #EB501E 100%)' },
];

const RADII = [
  { v: 'radius-sm', px: 10 }, { v: 'radius-md', px: 12 }, { v: 'radius-lg', px: 14 },
  { v: 'radius-xl', px: 18 }, { v: 'radius-2xl', px: 20 }, { v: 'radius-3xl', px: 24 }, { v: 'radius-pill', px: 999 },
];
const SHADOWS = [
  { v: 'shadow-float', css: '0 16px 32px -10px rgba(40,55,120,0.25)' },
  { v: 'shadow-card', css: '0 20px 40px -14px rgba(40,55,120,0.22)' },
  { v: 'shadow-btn', css: '0 12px 24px -8px rgba(40,55,120,0.45)' },
  { v: 'shadow-pop', css: '0 30px 60px -18px rgba(40,55,120,0.32)' },
  { v: 'shadow-modal', css: '0 40px 80px -24px rgba(15,21,52,0.6)' },
];
const SPACE = [
  ['space-1', 4], ['space-2', 8], ['space-3', 12], ['space-4', 16], ['space-5', 20],
  ['space-6', 24], ['space-8', 32], ['space-10', 40], ['space-14', 56], ['space-18', 72], ['space-24', 96],
] as [string, number][];
const BREAKPOINTS = [
  ['Small phone', 560], ['Phone', 600], ['Tablet', 768], ['Small laptop', 900], ['Nav collapse', 1040], ['Container', 1240],
] as [string, number][];

const TYPE = [
  { tag: 'Display', font: 'Ubuntu 700', size: 'clamp(34px · 58px)', lh: '1.15', ex: 'Fast, Secure, Done Right', style: { fontSize: 46, fontWeight: 700, lineHeight: 1.15 } },
  { tag: 'H1', font: 'Ubuntu 700', size: 'clamp(28px · 44px)', lh: '1.18', ex: 'Professional Notary & Apostille', style: { fontSize: 38, fontWeight: 700, lineHeight: 1.18 } },
  { tag: 'H2', font: 'Ubuntu 700', size: 'clamp(28px · 42px)', lh: '1.2', ex: 'Every document service, one team', style: { fontSize: 32, fontWeight: 700, lineHeight: 1.2 } },
  { tag: 'H3', font: 'Ubuntu 700', size: '18–21px', lh: '1.25', ex: 'Apostille & Embassy Authentication', style: { fontSize: 20, fontWeight: 700, lineHeight: 1.25 } },
  { tag: 'H4', font: 'Ubuntu 700', size: '16–18px', lh: '1.3', ex: 'Mobile & in-office notary', style: { fontSize: 17, fontWeight: 700, lineHeight: 1.3 } },
  { tag: 'Body L', font: 'Montserrat 400', size: '17px', lh: '1.65', ex: 'Expert support from certified professionals with 30+ years of experience.', style: { fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-muted)' } },
  { tag: 'Body', font: 'Montserrat 400', size: '15px', lh: '1.6', ex: 'Notary Public, apostille, certified translation, Live Scan, passport & visa services.', style: { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)' } },
  { tag: 'Small', font: 'Montserrat 600', size: '13.5px', lh: '1.55', ex: 'Bonded · Licensed · Court-certified', style: { fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 600 } },
  { tag: 'Eyebrow', font: 'Montserrat 700', size: '13px · 0.12em', lh: '1', ex: 'WHAT WE HELP WITH', style: { fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--brand-blue)' } },
];

const SERVICE_TINTS = ['#FFF3D6', '#ECEBFB', '#DBF3E8', '#EAF3D8', '#DEEEFB', '#F7E3F1'];
const ICON_KEYS = Object.keys(IC).filter((k) => k !== 'inner' && k !== 'chevron');

const BANNERS = [
  { key: '16x9', ratio: '16 / 9', bg: '/brand/banners/bg-16x9-v2.webp', w: 640, eyebrow: 'SINCE 1994 · SOUTHERN CALIFORNIA', title: 'Notary, Apostille & Documents — Done Right', desc: 'Certified professionals, same-day service.', offer: 'Same-day available', align: 'left' },
  { key: '1x1', ratio: '1 / 1', bg: '/brand/banners/bg-1x1-v2.webp', w: 380, eyebrow: 'RUSH IN DOCUMENTATION', title: 'Apostille in 190+ countries', desc: 'State & federal, handled end to end.', offer: 'Get a quote today', align: 'center' },
  { key: '4x5', ratio: '4 / 5', bg: '/brand/banners/bg-4x5-v2.webp', w: 380, eyebrow: 'MOBILE NOTARY', title: 'We come to you', desc: 'Same-day across Los Angeles & San Diego.', offer: 'Book a consultation', align: 'left' },
  { key: '9x16', ratio: '9 / 16', bg: '/brand/banners/bg-9x16-v2.webp', w: 300, eyebrow: 'URGENT SERVICE', title: 'Need it done today?', desc: 'Fast, secure document services.', offer: 'Call 24/7 hotline', align: 'center' },
];

const AI_PROMPTS = [
  { title: 'Advertising visual', body: 'Premium advertising background for Rush In Documentation Center: [SCENE] in a deep navy blue (#1D2540→#283778) mood with warm gold (#FFC805) light accents, cinematic shallow depth of field, clean empty negative space for text, elegant and trustworthy. No text, no logos, no lettering, no watermark.' },
  { title: 'Person / portrait', body: 'Studio portrait of [SUBJECT], eyes wide open looking at camera, warm genuine smile, professional navy attire, plain deep navy blue seamless backdrop with soft gold rim light, premium editorial lighting, sharp focus. No text, no logos.' },
  { title: 'Product / hero object', body: 'Cinematic still life of [PRODUCT] (e.g. apostille folder, passport, wax seal) on a clean surface, deep navy and gold tones, warm directional light, shallow depth of field, premium and precise. No readable text, no logos, no lettering.' },
  { title: 'Abstract / texture', body: 'Abstract brand texture for [CAMPAIGN]: smooth deep-navy gradient with subtle gold light bloom and soft bokeh, minimal, elegant, lots of negative space. No text, no logos, no lettering.' },
];

/* ============================================================= small UI */
function Swatch({ v, hex, name, on }: { v: string; hex: string; name: string; on?: string }) {
  const copy = useC();
  return (
    <div className="sg-swatch" onClick={() => copy(hex, name)} title="Click to copy HEX">
      <div style={{ height: 78, background: `var(--${v})`, borderBottom: '1px solid var(--border)' }} />
      <div style={{ padding: '10px 12px' }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--brand-ink)' }}>{name}</div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11.5, color: 'var(--text-muted)', marginTop: 3 }}>{hex}</div>
        <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 10.5, color: 'var(--text-subtle)', marginTop: 2 }}>--{v}</div>
      </div>
    </div>
  );
}

function DL({ href, children, ghost }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  return (
    <a className={`sg-dl${ghost ? ' ghost' : ''}`} href={href} download>
      <Svg inner={IC.upload} size={14} sw={2.2} style={{ transform: 'rotate(180deg)' }} />
      {children}
    </a>
  );
}

/* ============================================================= sections list */
const NAV = [
  { g: 'Brand', items: [['01', 'overview', 'Overview'], ['02', 'logo', 'Logo System'], ['03', 'color', 'Color System'], ['04', 'typography', 'Typography']] },
  { g: 'Foundations', items: [['05', 'spacing', 'Spacing & Grid'], ['06', 'effects', 'Radius · Shadow · FX'], ['10', 'motion', 'Motion'], ['11', 'tokens', 'Design Tokens']] },
  { g: 'Library', items: [['07', 'components', 'UI Components'], ['08', 'icons', 'Icons & Favicons'], ['09', 'imagery', 'Imagery']] },
  { g: 'Campaigns', items: [['12', 'social', 'Social System'], ['13', 'banners', 'Banner Concepts'], ['14', 'formats', 'Social Formats'], ['15', 'ai', 'AI Guidelines']] },
  { g: 'Rules', items: [['16', 'dodont', 'Do / Don’t'], ['17', 'downloads', 'Download Center']] },
] as { g: string; items: [string, string, string][] }[];

/* ============================================================= main */
export default function StyleGuide() {
  const { copy, msg } = useCopy();
  const [active, setActive] = useState('overview');
  const [play, setPlay] = useState('Fast, Secure, Done Right');
  const [codeOpen, setCodeOpen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const secs = Array.from(document.querySelectorAll('[data-sg-section]'));
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] }
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <CopyCtx.Provider value={copy}>
      <div className="sg">
        {/* mobile top nav */}
        <div className="sg-topbar">
          <div className="sg-topbar-scroll">
            {NAV.flatMap((g) => g.items).map(([n, id, label]) => (
              <div key={id} className={`sg-navlink${active === id ? ' active' : ''}`} onClick={() => go(id)}>
                <span className="sg-navnum">{n}</span>{label}
              </div>
            ))}
          </div>
        </div>

        <div className="sg-shell">
          {/* sidebar */}
          <aside className="sg-side">
            <a className="sg-brandline" href="/" aria-label="Rush In — back to site">
              <img src="/rushin-logo-white.svg" alt="Rush In Documentation Center" style={{ height: 30 }} />
            </a>
            {NAV.map((grp) => (
              <div key={grp.g}>
                <div className="sg-navgroup">{grp.g}</div>
                {grp.items.map(([n, id, label]) => (
                  <div key={id} className={`sg-navlink${active === id ? ' active' : ''}`} onClick={() => go(id)}>
                    <span className="sg-navnum">{n}</span>{label}
                  </div>
                ))}
              </div>
            ))}
            <a href="/" style={{ display: 'block', marginTop: 24, padding: '10px', fontSize: 12.5, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>← Back to website</a>
          </aside>

          {/* main */}
          <main className="sg-main">
            {/* 01 OVERVIEW */}
            <Section id="overview" num="01" eyebrow="Brand overview" title="Rush In — Brand & UI System" lead="The single source of truth for the Rush In Documentation Center brand. Every value below is extracted directly from the live website — colors, type, spacing, effects, components and assets. Click any value to copy it.">
              <div style={{ marginTop: 28, borderRadius: 'var(--radius-3xl)', overflow: 'hidden', background: 'var(--grad-hero)', color: '#fff', padding: 'clamp(28px, 5vw, 56px)', boxShadow: 'var(--shadow-pop)' }}>
                <img src="/rushin-logo-white.svg" alt="Rush In" style={{ height: 46 }} />
                <h1 className="sg-h2" style={{ color: '#fff', maxWidth: 640, marginTop: 24 }}>Fast, Secure, <span style={{ color: 'var(--brand-accent)' }}>Done Right.</span></h1>
                <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, marginTop: 14, lineHeight: 1.65 }}>Trustworthy, precise and premium. A navy-and-gold identity built for a document-services brand serving Southern California since 1994.</p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
                  <span className="sg-btn-demo" style={{ background: 'var(--brand-accent)', color: 'var(--brand-ink)', padding: '14px 26px', borderRadius: 'var(--radius-lg)', fontWeight: 700, fontSize: 15 }}>Book Consultation</span>
                  <span style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', padding: '14px 26px', borderRadius: 'var(--radius-lg)', fontWeight: 700, fontSize: 15 }}>Upload Documents</span>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 30, flexWrap: 'wrap' }}>
                  {['#283778', '#33438D', '#1D2540', '#FFC805', '#4AA4EA', '#F6F8FC'].map((c) => (
                    <div key={c} onClick={() => copy(c)} className="sg-copy" style={{ width: 46, height: 46, borderRadius: 12, background: c, border: '1px solid rgba(255,255,255,0.2)', cursor: 'copy' }} title={c} />
                  ))}
                </div>
              </div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                {[['Typeface', 'Ubuntu + Montserrat'], ['Core colors', 'Navy #283778 · Gold #FFC805'], ['Voice', 'Certified · Fast · Reassuring'], ['Since', '1994 · Southern California']].map(([k, v]) => (
                  <div key={k} className="sg-card">
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brand-blue)' }}>{k}</div>
                    <div className="font-ub" style={{ fontWeight: 700, fontSize: 17, marginTop: 8 }}>{v}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 02 LOGO */}
            <Section id="logo" num="02" eyebrow="Logo system" title="Logo & marks" lead="The primary lockup pairs the folded-document glyph with the Ubuntu wordmark. Use the variant with the strongest contrast against its background. Minimum width 120px; keep clear space of at least the glyph height on all sides.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
                {[
                  { bg: '#FFFFFF', src: '/rushin-logo.svg', label: 'Primary · on light', file: '/rushin-logo.svg' },
                  { bg: '#1B2450', src: '/rushin-logo-white.svg', label: 'White · on dark', file: '/rushin-logo-white.svg' },
                  { bg: 'var(--grad-hero)', src: '/rushin-logo-white.svg', label: 'On brand navy', file: '/rushin-logo-white.svg' },
                  { bg: '#F6F8FC', src: '/rushin-logo-mono.svg', label: 'Mono navy', file: '/rushin-logo-mono.svg' },
                  { bg: '#283778', src: '/rushin-logo-mono-white.svg', label: 'Mono white', file: '/rushin-logo-mono-white.svg' },
                  { bg: '#FFC805', src: '/rushin-logo-mono.svg', label: 'On accent', file: '/rushin-logo-mono.svg' },
                ].map((l) => (
                  <div key={l.label} className="sg-card" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ background: l.bg, minHeight: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
                      <img src={l.src} alt={l.label} style={{ height: 34, maxWidth: '80%' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '12px 14px', borderTop: '1px solid var(--border)' }}>
                      <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>{l.label}</span>
                      <DL href={l.file} ghost>SVG</DL>
                    </div>
                  </div>
                ))}
                <div className="sg-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ background: 'var(--brand-ink)', minHeight: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, padding: 24 }}>
                    <img src="/favicon.svg" alt="Glyph" style={{ height: 54 }} />
                    <img src="/apple-touch-icon.png" alt="App icon" style={{ height: 54, borderRadius: 12 }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '12px 14px', borderTop: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)' }}>Glyph / app icon</span>
                    <DL href="/favicon.svg" ghost>SVG</DL>
                  </div>
                </div>
              </div>
              <div className="sg-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 16 }}>
                <div className="sg-card" style={{ borderColor: 'var(--success)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--success)', display: 'flex', gap: 8, alignItems: 'center' }}><Svg inner={IC.check} size={18} stroke="#2E7D46" /> DO</div>
                  <ul style={{ margin: '10px 0 0', paddingLeft: 18, color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>
                    <li>Keep clear space around the lockup</li>
                    <li>Use white/mono variants on busy or dark imagery</li>
                    <li>Preserve the glyph-to-wordmark proportion</li>
                  </ul>
                </div>
                <div className="sg-card" style={{ borderColor: '#E7B4B4' }}>
                  <div style={{ fontWeight: 700, color: '#B4482E', display: 'flex', gap: 8, alignItems: 'center' }}>✕ DON’T</div>
                  <ul style={{ margin: '10px 0 0', paddingLeft: 18, color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7 }}>
                    <li>Recolor, stretch or rotate the logo</li>
                    <li>Place the navy logo on a dark background</li>
                    <li>Add shadows, outlines or effects to the mark</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* 03 COLOR */}
            <Section id="color" num="03" eyebrow="Color system" title="Color palette" lead="Navy carries the brand; gold drives action; blue supports; neutrals build the calm, trustworthy surfaces. Click a swatch to copy its HEX.">
              {COLOR_GROUPS.map((grp) => (
                <div key={grp.title} style={{ marginTop: 26 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand-ink)', marginBottom: 12 }}>{grp.title}</div>
                  <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12, marginTop: 0 }}>
                    {grp.items.map((c) => <Swatch key={c.v} {...c} />)}
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand-ink)', margin: '30px 0 12px' }}>Gradients</div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 0 }}>
                {GRADIENTS.map((g) => (
                  <div key={g.v} className="sg-swatch" onClick={() => copy(g.css, g.v)}>
                    <div style={{ height: 92, background: `var(--${g.v})` }} />
                    <div style={{ padding: '10px 12px' }}>
                      <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--text-subtle)' }}>--{g.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 04 TYPOGRAPHY */}
            <Section id="typography" num="04" eyebrow="Typography" title="Type system" lead="Ubuntu (700) for headings and numbers; Montserrat (400–700) for body and UI. Tight tracking on display; comfortable 1.6–1.65 line-height on body.">
              <div className="sg-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                {[['Ubuntu', 'Headings · numbers · logo', '--font-heading', 'font-ub'], ['Montserrat', 'Body · UI · buttons', '--font-body', '']].map(([f, use, v]) => (
                  <div key={f} className="sg-card" onClick={() => copy(f)}>
                    <div className={f === 'Ubuntu' ? 'font-ub' : ''} style={{ fontFamily: f === 'Ubuntu' ? 'var(--font-heading)' : 'var(--font-body)', fontSize: 40, fontWeight: 700 }}>{f}</div>
                    <div style={{ marginTop: 6, fontSize: 13.5, color: 'var(--text-muted)' }}>{use}</div>
                    <div style={{ marginTop: 10, fontFamily: 'ui-monospace, monospace', fontSize: 11.5, color: 'var(--text-subtle)' }}>{v}</div>
                    <div className={f === 'Ubuntu' ? 'font-ub' : ''} style={{ fontFamily: f === 'Ubuntu' ? 'var(--font-heading)' : 'var(--font-body)', marginTop: 12, fontSize: 20, letterSpacing: '0.02em' }}>AaBbCc 0123456789</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                {TYPE.map((t) => (
                  <div key={t.tag} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 20, padding: '18px 0', borderBottom: '1px solid var(--border)', alignItems: 'baseline' }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13.5 }}>{t.tag}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-subtle)', marginTop: 4, lineHeight: 1.5 }}>{t.font}<br />{t.size}</div>
                    </div>
                    <div className={t.tag.startsWith('Body') || ['Small', 'Eyebrow'].includes(t.tag) ? '' : 'font-ub'} style={t.style as React.CSSProperties}>{t.ex}</div>
                  </div>
                ))}
              </div>
              <div className="sg-card" style={{ marginTop: 22 }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--brand-blue)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Type playground</div>
                <input value={play} onChange={(e) => setPlay(e.target.value)} style={{ width: '100%', marginTop: 12, border: '1.5px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 14px', fontSize: 15, fontFamily: 'var(--font-body)', outline: 'none' }} />
                <div className="font-ub" style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 700, lineHeight: 1.15, marginTop: 18 }}>{play || 'Type something…'}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--text-muted)', marginTop: 10 }}>{play || 'Type something…'}</div>
              </div>
            </Section>

            {/* 05 SPACING & GRID */}
            <Section id="spacing" num="05" eyebrow="Spacing, grid & responsive" title="Layout foundations" lead="A 4px-based spacing scale, a 1240px max-width container, a 12-column grid, and the breakpoints the site actually uses.">
              <div style={{ marginTop: 24 }}>
                {SPACE.map(([v, px]) => (
                  <div key={v} className="sg-copy" onClick={() => copy(px + 'px', v)} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '7px 0', cursor: 'copy' }}>
                    <div style={{ width: 90, fontFamily: 'ui-monospace, monospace', fontSize: 12, color: 'var(--text-muted)' }}>--{v}</div>
                    <div style={{ height: 16, width: px, background: 'var(--brand-accent)', borderRadius: 4 }} />
                    <div style={{ fontSize: 12.5, color: 'var(--text-subtle)' }}>{px}px</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, margin: '28px 0 12px' }}>12-column grid · 1240px container</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 8, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 12 }}>
                {Array.from({ length: 12 }).map((_, i) => <div key={i} style={{ height: 60, background: 'var(--surface-2)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--text-subtle)' }}>{i + 1}</div>)}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, margin: '28px 0 12px' }}>Breakpoints</div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginTop: 0 }}>
                {BREAKPOINTS.map(([label, px]) => (
                  <div key={label} className="sg-card" onClick={() => copy(px + 'px')} style={{ cursor: 'copy', padding: 16 }}>
                    <div className="font-ub" style={{ fontWeight: 700, fontSize: 22, color: 'var(--brand-primary)' }}>{px}px</div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 06 EFFECTS */}
            <Section id="effects" num="06" eyebrow="Radius · borders · shadows · FX" title="Effects & elevation" lead="Soft navy-tinted shadows, generous rounding, and the signature floating-badge motion. Click to copy the CSS.">
              <div style={{ fontSize: 13, fontWeight: 700, margin: '24px 0 12px' }}>Radius</div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', marginTop: 0 }}>
                {RADII.map((r) => (
                  <div key={r.v} className="sg-copy" onClick={() => copy((r.px === 999 ? '999px' : r.px + 'px'), r.v)} style={{ textAlign: 'center', cursor: 'copy' }}>
                    <div style={{ height: 76, background: 'var(--surface)', border: '1.5px solid var(--border-strong)', borderRadius: `var(--${r.v})`, boxShadow: 'var(--shadow-float)' }} />
                    <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11.5, color: 'var(--text-muted)', marginTop: 8 }}>--{r.v}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-subtle)' }}>{r.px === 999 ? 'full' : r.px + 'px'}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, margin: '30px 0 12px' }}>Shadows</div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', marginTop: 0 }}>
                {SHADOWS.map((s) => (
                  <div key={s.v} onClick={() => copy(s.css, s.v)} className="sg-copy" style={{ cursor: 'copy' }}>
                    <div style={{ height: 90, background: 'var(--surface)', borderRadius: 'var(--radius-xl)', boxShadow: `var(--${s.v})` }} />
                    <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11.5, color: 'var(--text-muted)', marginTop: 12 }}>--{s.v}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, margin: '30px 0 12px' }}>Signature FX</div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 0 }}>
                <div className="sg-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
                  <span style={{ background: 'var(--brand-accent)', color: 'var(--brand-ink)', borderRadius: 'var(--radius-lg)', padding: '12px 18px', fontWeight: 700, fontSize: 13, display: 'inline-flex', gap: 8, alignItems: 'center', animation: 'riFloat 5s ease-in-out infinite', boxShadow: '0 16px 32px -10px rgba(150,110,0,0.45)' }}><Svg inner={IC.zap} size={16} sw={2.2} /> Floating badge</span>
                </div>
                <div className="sg-card" style={{ minHeight: 120, background: 'var(--grad-hero)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)', color: '#fff', borderRadius: 'var(--radius-pill)', padding: '9px 16px', fontSize: 13, fontWeight: 600 }}>Glass on navy</span>
                </div>
                <div className="sg-card sg-hoverlift" style={{ minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: 13 }}>Hover-lift card (−4px)</div>
              </div>
            </Section>

            {/* 07 COMPONENTS */}
            <Section id="components" num="07" eyebrow="Core UI components" title="Component library" lead="The real building blocks of the site — buttons, inputs, pills, cards, rating, accordion — with their true states.">
              {/* Buttons */}
              <ComponentBlock label="Buttons" code={`<a class="ri-btn-primary">Book Consultation</a>\n<a class="ri-btn-amber">Get a Quote</a>\n<a class="ri-btn-outline">Upload</a>`} codeOpen={codeOpen} setCodeOpen={setCodeOpen} keyName="btn">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                  <span className="ri-btn-primary" style={{ background: 'var(--brand-primary)', color: '#fff', padding: '14px 26px', borderRadius: 'var(--radius-lg)', fontWeight: 700, fontSize: 15, boxShadow: 'var(--shadow-btn)', cursor: 'pointer' }}>Book Consultation</span>
                  <span className="ri-btn-amber" style={{ background: 'var(--brand-accent)', color: 'var(--brand-ink)', padding: '14px 26px', borderRadius: 'var(--radius-lg)', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Get a Quote</span>
                  <span className="ri-btn-outline" style={{ background: 'var(--surface)', color: 'var(--brand-primary)', border: '1.5px solid var(--border-strong)', padding: '14px 26px', borderRadius: 'var(--radius-lg)', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Upload Documents</span>
                  <span className="ri-phonebtn" style={{ background: 'var(--brand-accent)', color: 'var(--brand-ink)', padding: '13px 22px', borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: 15, display: 'inline-flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}><Svg inner={IC.phone} size={17} sw={2.2} /> +1 323 645 1600</span>
                </div>
                <div style={{ background: 'var(--grad-urgent)', borderRadius: 'var(--radius-xl)', padding: 20, marginTop: 14, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <span className="ri-btn-amber" style={{ background: 'var(--brand-accent)', color: 'var(--brand-ink)', padding: '14px 26px', borderRadius: 'var(--radius-lg)', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Request Urgent Service</span>
                  <span className="ri-btn-ghost-dark" style={{ color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', padding: '14px 26px', borderRadius: 'var(--radius-lg)', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Ghost on dark</span>
                </div>
              </ComponentBlock>

              {/* Inputs */}
              <ComponentBlock label="Inputs & states" code={`<input placeholder="you@email.com" />\n:focus { border-color: #283778 }`} codeOpen={codeOpen} setCodeOpen={setCodeOpen} keyName="inp">
                <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 0 }}>
                  {[['Default', { border: '1.5px solid var(--border)' }, 'Your full name'], ['Focus', { border: '1.5px solid var(--brand-primary)', boxShadow: '0 0 0 3px rgba(40,55,120,0.12)' }, 'you@email.com'], ['Error', { border: '1.5px solid #D9534F' }, 'Invalid email'], ['Disabled', { border: '1.5px solid var(--border)', background: 'var(--surface-2)', color: 'var(--text-subtle)' }, 'Disabled']].map(([label, st, ph]) => (
                    <div key={label as string}>
                      <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6 }}>{label as string}</div>
                      <input disabled={label === 'Disabled'} placeholder={ph as string} style={{ width: '100%', borderRadius: 'var(--radius-md)', padding: '12px 14px', fontSize: 14, fontFamily: 'var(--font-body)', outline: 'none', ...(st as React.CSSProperties) }} />
                    </div>
                  ))}
                </div>
              </ComponentBlock>

              {/* Pills / badges */}
              <ComponentBlock label="Badges, pills & tints" code={`<span class="chip">Ukraine</span>`} codeOpen={codeOpen} setCodeOpen={setCodeOpen} keyName="pill">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
                  <span style={{ background: 'var(--surface-2)', color: 'var(--brand-primary)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontSize: 12, fontWeight: 600 }}>Ukraine</span>
                  <span style={{ background: 'var(--success-bg)', color: 'var(--success)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontSize: 12, fontWeight: 700, display: 'inline-flex', gap: 6, alignItems: 'center' }}><Svg inner={IC.check} size={13} stroke="#2E7D46" sw={3} /> Authenticated</span>
                  <span style={{ background: 'var(--warn-bg)', border: '1px solid var(--warn-border)', color: 'var(--warn-text)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontSize: 12, fontWeight: 700 }}>Take note</span>
                  <span style={{ background: 'var(--brand-accent)', color: 'var(--brand-ink)', borderRadius: 'var(--radius-md)', padding: '8px 14px', fontSize: 12.5, fontWeight: 700, display: 'inline-flex', gap: 6, alignItems: 'center' }}><Svg inner={IC.zap} size={14} sw={2.2} /> Same-day available</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
                  {['#FFF3D6', '#ECEBFB', '#DBF3E8', '#EAF3D8', '#DEEEFB', '#F7E3F1'].map((tint, i) => (
                    <span key={tint} style={{ background: tint, color: 'var(--brand-ink)', borderRadius: 'var(--radius-md)', padding: '9px 14px', fontWeight: 700, fontSize: 13, display: 'inline-flex', gap: 9, alignItems: 'center' }}>
                      <span style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Svg inner={[IC.feather, IC.fileSeal, IC.mapPin, IC.scale, IC.fingerprint, IC.heart][i]} size={15} stroke="#283778" sw={1.8} /></span>
                      Service pill
                    </span>
                  ))}
                </div>
              </ComponentBlock>

              {/* Cards + rating */}
              <ComponentBlock label="Cards & rating" code={`<a class="ri-service-card">…</a>`} codeOpen={codeOpen} setCodeOpen={setCodeOpen} keyName="card">
                <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 0 }}>
                  <div className="ri-service-card" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-2xl)', padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <div style={{ width: 50, height: 50, borderRadius: 15, background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Svg inner={IC.notary} size={24} stroke="#283778" sw={1.75} /></div>
                    <div className="font-ub" style={{ fontWeight: 700, fontSize: 18 }}>Notary Public</div>
                    <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.55 }}>Acknowledgments and jurats — same-day available.</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand-primary)' }}>Learn more →</div>
                  </div>
                  <div className="sg-card" style={{ display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
                    <span style={{ color: 'var(--brand-accent)', fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
                    <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>“Wonderful staff and a pleasure to work with.”</div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <div className="font-ub" style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--brand-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>G</div>
                      <div><div style={{ fontWeight: 700, fontSize: 13 }}>Gary V</div><div style={{ fontSize: 12, color: 'var(--text-subtle)' }}>Google review</div></div>
                    </div>
                  </div>
                </div>
              </ComponentBlock>

              {/* Accordion */}
              <ComponentBlock label="Accordion" code={`<button>Question</button> + panel`} codeOpen={codeOpen} setCodeOpen={setCodeOpen} keyName="acc">
                <SGAccordion />
              </ComponentBlock>
            </Section>

            {/* 08 ICONS */}
            <Section id="icons" num="08" eyebrow="Icons & favicons" title="Iconography" lead="A single custom Lucide-style set: 24×24 grid, 1.75–2px stroke, rounded caps & joins, currentColor. Below is the full set used across the site.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))', marginTop: 24 }}>
                {ICON_KEYS.map((k) => (
                  <div key={k} className="sg-copy" onClick={() => copy(k, 'icon “' + k + '”')} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '16px 8px', textAlign: 'center', cursor: 'copy' }}>
                    <Svg inner={(IC as Record<string, string>)[k]} size={24} stroke="#283778" sw={1.75} />
                    <div style={{ fontSize: 10.5, color: 'var(--text-subtle)', marginTop: 8, overflow: 'hidden', textOverflow: 'ellipsis' }}>{k}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, margin: '30px 0 12px' }}>Favicon set</div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginTop: 0 }}>
                {[['favicon.svg', '/favicon.svg'], ['favicon.ico', '/favicon.ico'], ['16×16', '/favicon-16x16.png'], ['32×32', '/favicon-32x32.png'], ['apple-touch 180', '/apple-touch-icon.png'], ['android 512', '/android-chrome-512x512.png']].map(([label, href]) => (
                  <div key={label} className="sg-card" style={{ textAlign: 'center', padding: 16 }}>
                    <img src={href} alt={label} style={{ height: 48, borderRadius: 10, margin: '0 auto', display: 'block' }} />
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', margin: '10px 0 10px' }}>{label}</div>
                    <DL href={href} ghost>Download</DL>
                  </div>
                ))}
              </div>
            </Section>

            {/* 09 IMAGERY */}
            <Section id="imagery" num="09" eyebrow="Imagery" title="Photography & visual style" lead="Warm, professional, real. Navy-and-gold grade, soft natural light, shallow depth of field, people with genuine expressions. Documents shot with precision and negative space.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 24 }}>
                {[
                  ['/images/hero-bg.webp', 'Hero · office (16:9)'],
                  ['/images/urgent-notary.webp', 'People · portrait (3:4)'],
                  ['/images/services/apostille.webp', 'Documents · still life'],
                  ['/images/international.webp', 'Global · conceptual'],
                  ['/images/team-vadim.webp', 'Team · headshot (1:1)'],
                  ['/images/services/notary.webp', 'In-context · service'],
                ].map(([src, label]) => (
                  <figure key={src} style={{ margin: 0 }}>
                    <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border)', aspectRatio: '4 / 3' }}>
                      <img src={src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <figcaption style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>{label}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', marginTop: 16 }}>
                {[['Palette', 'Navy shadows, gold warmth'], ['Light', 'Soft, natural, directional'], ['Depth', 'Shallow — subject in focus'], ['Crop', '16:9 · 4:5 · 1:1 · 3:4'], ['People', 'Open eyes, genuine smiles'], ['Space', 'Room for text overlay']].map(([k, v]) => (
                  <div key={k} className="sg-card" style={{ padding: 16 }}><div style={{ fontSize: 12, fontWeight: 700, color: 'var(--brand-blue)' }}>{k}</div><div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>{v}</div></div>
                ))}
              </div>
            </Section>

            {/* 10 MOTION */}
            <Section id="motion" num="10" eyebrow="Motion & interaction" title="Motion language" lead="Quick, confident micro-interactions (150ms) and slow, calm ambient floats (5–7s). Nothing flashy — motion reinforces trust.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 24 }}>
                {[['Hover / press', '0.15s', '--dur-fast'], ['Card transition', '0.2s', '--dur-mid'], ['Progress / tabs', '0.25s', '--dur-slow'], ['Float ambient', '5–7s loop', 'riFloat']].map(([k, v, tok]) => (
                  <div key={k} className="sg-card" onClick={() => copy(v)} style={{ cursor: 'copy' }}>
                    <div className="font-ub" style={{ fontWeight: 700, fontSize: 22, color: 'var(--brand-primary)' }}>{v}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 4 }}>{k}</div>
                    <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: 'var(--text-subtle)', marginTop: 6 }}>{tok}</div>
                  </div>
                ))}
              </div>
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 12 }}>
                <div className="sg-card sg-hoverlift" style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 13, minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Hover: lift −4px + shadow</div>
                <div className="sg-card" style={{ textAlign: 'center', minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ animation: 'riFloat 5s ease-in-out infinite', background: 'var(--brand-accent)', padding: '8px 14px', borderRadius: 10, fontWeight: 700, fontSize: 12.5 }}>riFloat (−10px)</span></div>
                <div className="sg-card" style={{ textAlign: 'center', minHeight: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ animation: 'riFloat2 6s ease-in-out infinite', border: '1px solid var(--border)', padding: '8px 14px', borderRadius: 10, fontWeight: 600, fontSize: 12.5 }}>riFloat2 (+8px)</span></div>
              </div>
            </Section>

            {/* 11 TOKENS */}
            <Section id="tokens" num="11" eyebrow="Design tokens" title="Tokens & export" lead="Every value on this page is generated from one source and exported as CSS custom properties and JSON. Change the source, and the guide updates itself.">
              <div className="sg-code" style={{ marginTop: 22 }}>{`:root {
  --brand-primary: #283778;
  --brand-accent:  #FFC805;
  --brand-ink:     #1D2540;
  --font-heading:  'Ubuntu', sans-serif;
  --font-body:     'Montserrat', system-ui, sans-serif;
  --radius-2xl:    20px;
  --shadow-card:   0 20px 40px -14px rgba(40,55,120,.22);
}`}</div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 18 }}>
                <DL href="/design-tokens.css">design-tokens.css</DL>
                <DL href="/design-tokens.json" ghost>design-tokens.json</DL>
              </div>
            </Section>

            {/* 12 SOCIAL */}
            <Section id="social" num="12" eyebrow="Social media system" title="Social presence" lead="Social is an extension of the site — same navy/gold, same Ubuntu/Montserrat, same rounded shapes and hierarchy. Consistent avatar, cover and post templates.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
                {/* Avatar */}
                <div className="sg-card" style={{ textAlign: 'center' }}>
                  <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--brand-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                    <img src="/favicon.svg" alt="avatar" style={{ height: 52 }} />
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 12 }}>Profile avatar · glyph on navy</div>
                </div>
                {/* Post */}
                <div className="sg-card" style={{ padding: 0, overflow: 'hidden', gridColumn: 'span 2', minWidth: 0 }}>
                  <div style={{ background: 'var(--grad-urgent)', color: '#fff', padding: 26, position: 'relative' }}>
                    <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--brand-accent)' }}>RUSH IN · TIP</div>
                    <div className="font-ub" style={{ fontSize: 26, fontWeight: 700, marginTop: 10, lineHeight: 1.15, maxWidth: 360 }}>Do you really need a notary?</div>
                    <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.82)', marginTop: 10, maxWidth: 340 }}>Vital records don’t — powers of attorney do. Swipe for the checklist.</div>
                    <span style={{ display: 'inline-block', marginTop: 16, background: 'var(--brand-accent)', color: 'var(--brand-ink)', padding: '9px 16px', borderRadius: 10, fontWeight: 700, fontSize: 12.5 }}>Learn more</span>
                  </div>
                </div>
              </div>
            </Section>

            {/* 13 BANNERS */}
            <Section id="banners" num="13" eyebrow="Banner concepts" title="Ready-made ad banners" lead="Real campaign banners — eyebrow, headline, offer and CTA locked to the brand type and palette, on Higgsfield-generated navy/gold backgrounds with a darkening scrim for legibility.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 24, alignItems: 'start' }}>
                {BANNERS.map((b) => <Banner key={b.key} b={b} />)}
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 18 }}>
                <DL href="/brand/banners/banner-16x9.png">Banner 16:9 PNG</DL>
                <DL href="/brand/banners/banner-1x1.png" ghost>Banner 1:1 PNG</DL>
                <DL href="/brand/banners/banner-9x16.png" ghost>Story 9:16 PNG</DL>
              </div>
            </Section>

            {/* 14 FORMATS */}
            <Section id="formats" num="14" eyebrow="Social formats & adaptation" title="Format adaptation" lead="Not a crop — a recompose. The same message re-flows for feed (1:1), portrait (4:5), story (9:16) and link (1200×628). Keep logo, headline and CTA inside the story safe-zones.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', marginTop: 24, alignItems: 'start' }}>
                {[['1080×1080', '1 / 1'], ['1080×1350', '4 / 5'], ['1200×628', '1200 / 628'], ['1080×1920', '9 / 16']].map(([label, ratio]) => (
                  <div key={label}>
                    <div style={{ position: 'relative', aspectRatio: ratio, borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--grad-hero)', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 16 }}>
                      {ratio === '9 / 16' && <>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '14%', background: 'rgba(255,200,5,0.14)', borderBottom: '1px dashed rgba(255,200,5,0.5)' }} />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '18%', background: 'rgba(255,200,5,0.14)', borderTop: '1px dashed rgba(255,200,5,0.5)' }} />
                        <div style={{ position: 'absolute', top: '4%', left: 0, right: 0, textAlign: 'center', fontSize: 8.5, color: 'var(--brand-accent)', fontWeight: 700 }}>SAFE · LOGO</div>
                        <div style={{ position: 'absolute', bottom: '6%', left: 0, right: 0, textAlign: 'center', fontSize: 8.5, color: 'var(--brand-accent)', fontWeight: 700 }}>SAFE · CTA</div>
                      </>}
                      <img src="/rushin-logo-white.svg" alt="" style={{ height: 16, marginBottom: 8 }} />
                      <div className="font-ub" style={{ fontWeight: 700, fontSize: ratio === '1200 / 628' ? 15 : 17, lineHeight: 1.15 }}>Done Right, on time.</div>
                      <span style={{ display: 'inline-block', marginTop: 8, background: 'var(--brand-accent)', color: 'var(--brand-ink)', padding: '5px 10px', borderRadius: 7, fontWeight: 700, fontSize: 9, width: 'fit-content' }}>Book now</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8, textAlign: 'center' }}>{label}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 15 AI GUIDELINES */}
            <Section id="ai" num="15" eyebrow="AI visual guidelines" title="Higgsfield prompt templates" lead="Reusable prompts that keep AI imagery on-brand. Swap the [VARIABLES]; always end with “no text, no logos”, keep people’s eyes open, and leave negative space for copy.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 24 }}>
                {AI_PROMPTS.map((p) => (
                  <div key={p.title} className="sg-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                      <div className="font-ub" style={{ fontWeight: 700, fontSize: 16 }}>{p.title}</div>
                      <button className="sg-chip-btn" onClick={() => copy(p.body, p.title + ' prompt')}>Copy</button>
                    </div>
                    <p style={{ fontSize: 12.5, lineHeight: 1.6, color: 'var(--text-muted)', marginTop: 10, fontFamily: 'ui-monospace, monospace' }}>{p.body}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 16 DO / DON'T */}
            <Section id="dodont" num="16" eyebrow="Do / Don’t" title="Usage rules" lead="Keep the system consistent. The quick reference below covers the mistakes that most often break the brand.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 24 }}>
                {[
                  ['Color', 'Navy for structure, gold only for the primary action.', 'Fill large areas with gold or use gold text on white.'],
                  ['Type', 'Ubuntu for headings, Montserrat for body.', 'Mix in other fonts or center long paragraphs.'],
                  ['Logo', 'Use white/mono on dark or busy backgrounds.', 'Place navy logo on navy, or recolor the mark.'],
                  ['Banners', 'Add a scrim so text stays legible over photos.', 'Put text over a busy area or the subject’s face.'],
                  ['AI images', 'Open eyes, natural light, brand palette, no text.', 'Ship AI frames with gibberish baked-in text.'],
                  ['Buttons', 'One primary action per view.', 'Stack multiple gold buttons competing for focus.'],
                ].map(([topic, doo, dont]) => (
                  <div key={topic} className="sg-card" style={{ padding: 0, overflow: 'hidden' }}>
                    <div style={{ padding: '12px 16px', fontWeight: 700, fontSize: 14, borderBottom: '1px solid var(--border)' }}>{topic}</div>
                    <div style={{ padding: '12px 16px', display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5 }}><Svg inner={IC.check} size={17} stroke="#2E7D46" sw={2.5} style={{ flexShrink: 0 }} /> {doo}</div>
                    <div style={{ padding: '12px 16px', display: 'flex', gap: 10, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, background: 'var(--surface-1)', borderTop: '1px solid var(--border)' }}><span style={{ color: '#B4482E', fontWeight: 800, flexShrink: 0 }}>✕</span> {dont}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* 17 DOWNLOADS */}
            <Section id="downloads" num="17" eyebrow="Brand asset download center" title="Download center" lead="Everything, ready to ship. All links below point to real, generated files in the project.">
              <div className="sg-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
                <div className="sg-card">
                  <div className="font-ub" style={{ fontWeight: 700, fontSize: 17 }}>Logo package</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '6px 0 14px' }}>SVG (color · white · mono) + PNG 128→2048</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <DL href="/rushin-logo.svg" ghost>Color SVG</DL>
                    <DL href="/rushin-logo-white.svg" ghost>White SVG</DL>
                    <DL href="/rushin-logo-mono.svg" ghost>Mono SVG</DL>
                    <DL href="/brand/logo/rushin-logo-1024.png" ghost>PNG 1024</DL>
                    <DL href="/brand/logo/rushin-logo-2048.png" ghost>PNG 2048</DL>
                  </div>
                </div>
                <div className="sg-card">
                  <div className="font-ub" style={{ fontWeight: 700, fontSize: 17 }}>Favicons</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '6px 0 14px' }}>ico · svg · png 16/32/180/192/512</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <DL href="/favicon.ico" ghost>.ico</DL>
                    <DL href="/apple-touch-icon.png" ghost>apple-touch</DL>
                    <DL href="/android-chrome-512x512.png" ghost>android 512</DL>
                    <DL href="/site.webmanifest" ghost>manifest</DL>
                  </div>
                </div>
                <div className="sg-card">
                  <div className="font-ub" style={{ fontWeight: 700, fontSize: 17 }}>Design tokens</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '6px 0 14px' }}>CSS custom properties + JSON</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <DL href="/design-tokens.css" ghost>tokens.css</DL>
                    <DL href="/design-tokens.json" ghost>tokens.json</DL>
                  </div>
                </div>
                <div className="sg-card">
                  <div className="font-ub" style={{ fontWeight: 700, fontSize: 17 }}>Social banners</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '6px 0 14px' }}>Composed ad banners, multiple formats</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    <DL href="/brand/banners/banner-16x9.png" ghost>16:9</DL>
                    <DL href="/brand/banners/banner-1x1.png" ghost>1:1</DL>
                    <DL href="/brand/banners/banner-9x16.png" ghost>9:16</DL>
                  </div>
                </div>
                <div className="sg-card" style={{ gridColumn: '1 / -1', background: 'var(--grad-hero)', color: '#fff', borderColor: 'transparent' }}>
                  <div className="font-ub" style={{ fontWeight: 700, fontSize: 20 }}>Full Brand Kit</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '6px 0 16px' }}>Logos, favicons, tokens, banners and this guide’s assets — one ZIP.</div>
                  <a className="sg-dl" href="/rushin-brand-kit.zip" download style={{ background: 'var(--brand-accent)', color: 'var(--brand-ink)' }}>
                    <Svg inner={IC.upload} size={15} sw={2.2} style={{ transform: 'rotate(180deg)' }} /> Download Brand Kit (ZIP)
                  </a>
                </div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--text-subtle)', fontSize: 12.5, marginTop: 40 }}>Rush In Documentation Center — Brand & UI System · generated from the live site.</div>
            </Section>
          </main>
        </div>
        {msg && <div className="sg-copied">{msg}</div>}
      </div>
    </CopyCtx.Provider>
  );
}

/* ============================================================= sub-components */
function ComponentBlock({ label, code, keyName, codeOpen, setCodeOpen, children }: { label: string; code: string; keyName: string; codeOpen: Record<string, boolean>; setCodeOpen: React.Dispatch<React.SetStateAction<Record<string, boolean>>>; children: React.ReactNode }) {
  const open = codeOpen[keyName];
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand-ink)' }}>{label}</div>
        <div className="sg-toggle">
          <button className={!open ? 'on' : ''} onClick={() => setCodeOpen((p) => ({ ...p, [keyName]: false }))}>Preview</button>
          <button className={open ? 'on' : ''} onClick={() => setCodeOpen((p) => ({ ...p, [keyName]: true }))}>Code</button>
        </div>
      </div>
      {open ? <div className="sg-code">{code}</div> : <div className="sg-card">{children}</div>}
    </div>
  );
}

function SGAccordion() {
  const [open, setOpen] = useState(0);
  const items = [
    ['Can a notary refuse to notarize a document?', 'Yes — if the document appears fraudulent, ID can’t be provided, or the signer can’t appear in person.'],
    ['How much does a mobile notary cost?', 'A base fee of $25 plus a $10 service provider fee; mobile pricing depends on travel and signatures.'],
    ['Do both parties need to be present?', 'In most cases only the signers need to be present; they can be notarized individually.'],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map(([q, a], i) => (
        <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '16px 18px', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', textAlign: 'left' }}>
            <span className="font-ub" style={{ fontWeight: 700, fontSize: 15 }}>{q}</span>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--surface-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)', fontWeight: 700, flexShrink: 0 }}>{open === i ? '−' : '+'}</span>
          </button>
          {open === i && <div style={{ padding: '0 18px 18px', fontSize: 13.5, lineHeight: 1.65, color: 'var(--text-muted)' }}>{a}</div>}
        </div>
      ))}
    </div>
  );
}

function Banner({ b }: { b: typeof BANNERS[number] }) {
  return (
    <div>
      <div style={{ position: 'relative', width: '100%', maxWidth: b.w, aspectRatio: b.ratio, borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border)' }}>
        <img src={b.bg} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: b.align === 'center' ? 'linear-gradient(180deg, rgba(16,22,48,0.35), rgba(16,22,48,0.78))' : 'linear-gradient(90deg, rgba(16,22,48,0.86) 0%, rgba(16,22,48,0.5) 55%, rgba(16,22,48,0.15) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, padding: 'clamp(18px, 6%, 34px)', display: 'flex', flexDirection: 'column', justifyContent: b.align === 'center' ? 'flex-end' : 'center', alignItems: b.align === 'center' ? 'center' : 'flex-start', textAlign: b.align === 'center' ? 'center' : 'left', color: '#fff' }}>
          <img src="/rushin-logo-white.svg" alt="Rush In" style={{ height: 20, marginBottom: 12, opacity: 0.95 }} />
          <div style={{ fontSize: 'clamp(10px, 2.6%, 14px)', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--brand-accent)' }}>{b.eyebrow}</div>
          <div className="font-ub" style={{ fontSize: 'clamp(22px, 8.5%, 46px)', fontWeight: 700, lineHeight: 1.08, marginTop: 8, maxWidth: '94%', textShadow: '0 2px 14px rgba(10,16,40,0.45)' }}>{b.title}</div>
          <div style={{ fontSize: 'clamp(12px, 3.2%, 17px)', color: 'rgba(255,255,255,0.9)', marginTop: 10, maxWidth: '92%', lineHeight: 1.4 }}>{b.desc}</div>
          <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', marginTop: 16, background: 'var(--brand-accent)', color: 'var(--brand-ink)', padding: 'clamp(9px,2.6%,14px) clamp(14px,4%,22px)', borderRadius: 12, fontWeight: 700, fontSize: 'clamp(12px, 3.4%, 18px)', boxShadow: '0 10px 24px -8px rgba(0,0,0,0.45)' }}><Svg inner={IC.zap} size={15} sw={2.2} /> {b.offer}</span>
        </div>
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>{b.key.replace('x', ':')} · {b.eyebrow.split(' ')[0]}</div>
    </div>
  );
}
