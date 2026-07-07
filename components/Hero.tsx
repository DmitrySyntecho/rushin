import React from 'react';
import { Svg, IC } from './icons';

const CTA_LABEL = 'Get a Quote';

function TrustItem({ inner, children }: { inner: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600, color: '#1D2540' }}>
      <Svg inner={inner} size={17} stroke="#4AA4EA" sw={2} />
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" style={{ background: 'linear-gradient(180deg, #F6F8FC 0%, #FFFFFF 100%)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 24px 88px', display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
        <div style={{ flex: '1 1 480px', minWidth: 320 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#FFFFFF',
              border: '1px solid #E4E8F3',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 13,
              fontWeight: 600,
              color: '#283778',
              boxShadow: '0 4px 12px -4px rgba(40,55,120,0.12)',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFC805', display: 'inline-block' }} />
            Southern California · Since 1994
          </div>
          <h1 className="font-ub" style={{ fontSize: 'clamp(34px, 4.4vw, 58px)', lineHeight: 1.15, fontWeight: 700, color: '#1D2540', margin: '24px 0 0', letterSpacing: '-0.01em' }}>
            Professional Notary, Apostille &amp; Document Services — <span style={{ color: '#283778' }}>Fast, Secure, Done Right</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5B6480', margin: '20px 0 0', maxWidth: 560 }}>
            From notarization and apostille to translations, visas, passports, immigration documents, and Live Scan — get expert support from certified professionals with 30+ years of experience.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32, alignItems: 'center' }}>
            <a href="#final-cta" className="ri-btn-primary" style={{ background: '#283778', color: '#FFFFFF', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16, boxShadow: '0 12px 24px -8px rgba(40,55,120,0.45)' }}>
              {CTA_LABEL}
            </a>
            <a href="#final-cta" className="ri-btn-outline" style={{ background: '#FFFFFF', color: '#283778', border: '1.5px solid #C9D2E8', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Svg inner={IC.upload} size={18} sw={2} />
              Upload Documents
            </a>
            <a href="tel:+13236451600" style={{ fontWeight: 700, fontSize: 14, color: '#283778', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Call 24-hour hotline
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px', marginTop: 36 }}>
            <TrustItem inner={IC.shieldCheck}>185,000+ successful cases</TrustItem>
            <TrustItem inner={IC.clock}>Same-day &amp; mobile notary</TrustItem>
            <TrustItem inner={IC.award}>Certified professionals</TrustItem>
            <TrustItem inner={IC.mapPin}>West Hollywood &amp; San Diego</TrustItem>
          </div>
        </div>

        {/* Hero visual: generated photo framed on the navy panel, with floating badges */}
        <div style={{ flex: '1 1 420px', minWidth: 320, position: 'relative', minHeight: 480 }}>
          <div style={{ position: 'absolute', inset: '8% 4% 4% 8%', background: 'linear-gradient(135deg, #283778 0%, #33438D 60%, #3A5BB0 100%)', borderRadius: 28 }} />
          <div
            style={{
              position: 'relative',
              margin: '32px 44px 0 20px',
              borderRadius: 22,
              overflow: 'hidden',
              boxShadow: '0 32px 64px -16px rgba(20,28,64,0.45)',
              border: '5px solid #FFFFFF',
              aspectRatio: '4 / 5',
            }}
          >
            <img
              src="/images/hero.webp"
              alt="Rush In consultant helping a client with document services"
              style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: 18,
              right: 8,
              background: '#FFC805',
              color: '#1D2540',
              borderRadius: 14,
              padding: '12px 18px',
              fontWeight: 700,
              fontSize: 13,
              boxShadow: '0 16px 32px -10px rgba(150,110,0,0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              animation: 'riFloat 5s ease-in-out infinite',
            }}
          >
            <Svg inner={IC.zap} size={16} sw={2.2} />
            Same-day available
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 34,
              left: 0,
              background: '#FFFFFF',
              border: '1px solid #E4E8F3',
              borderRadius: 14,
              padding: '12px 18px',
              fontWeight: 600,
              fontSize: 12.5,
              color: '#1D2540',
              boxShadow: '0 16px 32px -10px rgba(40,55,120,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              animation: 'riFloat2 6s ease-in-out infinite',
            }}
          >
            <Svg inner={IC.mapPin} size={16} stroke="#283778" sw={2} />
            Mobile notary · LA to San Diego
          </div>
          <div
            style={{
              position: 'absolute',
              top: '42%',
              left: -6,
              background: '#FFFFFF',
              border: '1px solid #E4E8F3',
              borderRadius: 14,
              padding: '10px 16px',
              fontWeight: 600,
              fontSize: 12.5,
              color: '#1D2540',
              boxShadow: '0 16px 32px -10px rgba(40,55,120,0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              animation: 'riFloat 7s ease-in-out infinite',
            }}
          >
            <Svg inner={IC.shieldCheck} size={16} stroke="#4AA4EA" sw={2} />
            Bonded · Lic. #7901273409
          </div>
        </div>
      </div>
    </section>
  );
}
