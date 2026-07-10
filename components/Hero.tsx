import React from 'react';
import { Svg, IC } from './icons';
import { BookButton } from './ConsultModal';
const LIGHT_BLUE = '#8FBEF0';

function TrustItem({ inner, children }: { inner: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, fontWeight: 600, color: '#FFFFFF' }}>
      <Svg inner={inner} size={17} stroke={LIGHT_BLUE} sw={2} />
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden', background: '#151C40' }}>
      {/* Full-bleed office background video — static camera, staff working in the background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-bg.webp"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/videos/hero-office.mp4" type="video/mp4" />
      </video>
      {/* Dark-blue gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(105deg, rgba(18,25,58,0.97) 0%, rgba(22,31,72,0.93) 40%, rgba(29,42,94,0.7) 66%, rgba(29,42,94,0.4) 100%)',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,25,58,0.2) 0%, rgba(18,25,58,0) 30%, rgba(18,25,58,0.45) 100%)' }} />

      <div className="ri-hero-content" style={{ position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '72px 24px 0', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-end' }}>
        <div className="ri-hero-left" style={{ flex: '1 1 520px', minWidth: 320, paddingBottom: 88 }}>
          <div
            className="ri-hero-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: 999,
              padding: '8px 16px',
              fontSize: 13,
              fontWeight: 600,
              color: '#FFFFFF',
              backdropFilter: 'blur(6px)',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFC805', display: 'inline-block' }} />
            Southern California · Since 1994
          </div>
          <h1 className="font-ub" style={{ fontSize: 'clamp(28px, 3.1vw, 44px)', lineHeight: 1.18, fontWeight: 700, color: '#FFFFFF', margin: '24px 0 0', letterSpacing: '-0.01em', maxWidth: 640 }}>
            Professional Notary, Apostille &amp; Document Services — <span style={{ color: '#FFC805' }}>Fast, Secure, Done Right</span>
          </h1>

          {/* Mobile-only: Vadim in an elegant framed card with floating badges */}
          <div className="ri-hero-vadim-mobile" style={{ display: 'none', width: '100%', maxWidth: 420, margin: '12px auto 0' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 0.9', borderRadius: 22, overflow: 'hidden', background: '#1D2A5E', border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 22px 46px -20px rgba(10,16,40,0.6)' }}>
              <img src="/images/hero-bg.webp" alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,28,64,0.4) 0%, rgba(20,28,64,0.1) 45%, rgba(20,28,64,0.5) 100%)' }} />
              <img src="/images/hero-vadim.webp" alt="Vadim — Executive Director & Immigration Consultant at Rush In" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              <div style={{ position: 'absolute', bottom: '32%', right: 10, display: 'flex', alignItems: 'center', gap: 7, background: '#FFC805', color: '#1D2540', borderRadius: 13, padding: '10px 15px', fontWeight: 700, fontSize: 12.5, boxShadow: '0 14px 28px -10px rgba(0,0,0,0.5)', animation: 'riFloat 5s ease-in-out infinite' }}>
                <Svg inner={IC.zap} size={14} sw={2.2} />
                Same-day available
              </div>
              <div style={{ position: 'absolute', bottom: '11%', left: 10, display: 'flex', alignItems: 'center', gap: 8, background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 13, padding: '9px 14px', fontWeight: 600, fontSize: 11.5, color: '#1D2540', boxShadow: '0 14px 28px -10px rgba(10,16,40,0.4)', animation: 'riFloat2 6s ease-in-out infinite' }}>
                <Svg inner={IC.shieldCheck} size={14} stroke="#4AA4EA" sw={2} />
                Bonded · Lic. #7901273409
              </div>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.82)', margin: '20px 0 0', maxWidth: 560 }}>
            From notarization and apostille to translations, visas, passports, immigration documents, and Live Scan — get expert support from certified professionals with 30+ years of experience.
          </p>
          <div className="ri-hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32, alignItems: 'center' }}>
            <BookButton label="Book Consultation" className="ri-btn-amber" style={{ background: '#FFC805', color: '#1D2540', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16, boxShadow: '0 12px 28px -8px rgba(0,0,0,0.4)' }} />
            <a href="#final-cta" className="ri-btn-ghost-dark" style={{ background: 'rgba(255,255,255,0.06)', color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.4)', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Svg inner={IC.upload} size={18} sw={2} />
              Upload Documents
            </a>
            <a href="tel:+13236451600" style={{ fontWeight: 700, fontSize: 14, color: '#FFC805', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              Call 24-hour hotline
            </a>
          </div>
          <div className="ri-hero-bullets" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px 28px', marginTop: 36, maxWidth: 520 }}>
            <TrustItem inner={IC.shieldCheck}>185,000+ successful cases</TrustItem>
            <TrustItem inner={IC.clock}>Same-day &amp; mobile notary</TrustItem>
            <TrustItem inner={IC.award}>Certified professionals</TrustItem>
            <TrustItem inner={IC.mapPin}>West Hollywood &amp; San Diego</TrustItem>
          </div>
        </div>

        {/* Vadim standing on the right — no frame */}
        <div className="ri-hero-visual" style={{ flex: '1 1 340px', minWidth: 280, alignSelf: 'stretch', position: 'relative', minHeight: 620 }}>
          <img
            src="/images/hero-vadim.webp"
            alt="Vadim — Executive Director & Immigration Consultant at Rush In"
            className="ri-hero-vadim"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              height: '104%',
              maxHeight: 760,
              width: 'auto',
              maxWidth: '110%',
              objectFit: 'contain',
              objectPosition: 'bottom right',
              filter: 'drop-shadow(0 18px 32px rgba(10,16,40,0.55))',
            }}
          />

          <div
            className="ri-hero-badge-sameday"
            style={{
              position: 'absolute',
              top: '48%',
              left: -8,
              background: '#FFC805',
              color: '#1D2540',
              borderRadius: 14,
              padding: '12px 18px',
              fontWeight: 700,
              fontSize: 13,
              boxShadow: '0 16px 32px -10px rgba(0,0,0,0.5)',
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
              bottom: 120,
              left: -6,
              background: '#FFFFFF',
              border: '1px solid #E4E8F3',
              borderRadius: 14,
              padding: '12px 18px',
              fontWeight: 600,
              fontSize: 12.5,
              color: '#1D2540',
              boxShadow: '0 16px 32px -10px rgba(10,16,40,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              animation: 'riFloat2 6s ease-in-out infinite',
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
