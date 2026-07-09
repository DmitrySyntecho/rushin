'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Svg, IC } from './icons';

type Service = { icon: string; title: string; desc: string; href: string };

const SERVICES: Service[] = [
  { icon: IC.notary, title: 'Notary Public', desc: 'Acknowledgments and jurats in-office or anywhere in Southern California — same-day available.', href: '#notarization' },
  { icon: IC.fileSeal, title: 'Apostille & Embassy Authentication', desc: 'State and federal apostilles, plus embassy legalization for non-Hague countries.', href: '#international' },
  { icon: IC.scale, title: 'Document Translation', desc: 'ATA-certified translation — English, Spanish, Russian, Ukrainian, Kazakh, and more.', href: '#international' },
  { icon: IC.feather, title: 'Russian Visa', desc: 'Expedited visa processing in 48–72 hours — visa guaranteed or your money back.', href: '#immigration' },
  { icon: IC.globe, title: 'Passport Services', desc: 'First-time and renewal passports as fast as 2–4 business days, photos included.', href: '#immigration' },
  { icon: IC.fileLines, title: 'Immigration Documentation', desc: 'Licensed, bonded immigration consultants preparing compliant paperwork since 1994.', href: '#immigration' },
  { icon: IC.idCard, title: 'Green Card Support', desc: 'Marriage-based, family-based, and DV-lottery green card preparation done right.', href: '#immigration' },
  { icon: IC.fingerprint, title: 'Live Scan', desc: 'DOJ & FBI-approved digital fingerprinting on site in West Hollywood.', href: '#immigration' },
  { icon: IC.searchDoc, title: 'Document Retrieval', desc: 'Vital records, court records, diplomas, and academic records retrieved for you.', href: '#immigration' },
  { icon: IC.heart, title: 'Same-Day Marriage Services', desc: 'Confidential same-day marriage licensing and ceremony coordination in LA.', href: '#final-cta' },
];

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <section id="services" style={{ background: '#F6F8FC' }}>
      <div className="ri-sec" style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 44, alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Video on the left */}
          <div style={{ flex: '1 1 380px', width: '100%', maxWidth: 480 }}>
            <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', boxShadow: '0 28px 56px -20px rgba(40,55,120,0.35)', border: '1px solid #E4E8F3', aspectRatio: '16 / 9', background: '#EEF2F9' }}>
              <video
                src="/videos/services.mp4"
                poster="/images/services-poster.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,28,64,0) 60%, rgba(20,28,64,0.28) 100%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.92)', color: '#1D2540', borderRadius: 999, padding: '7px 14px', fontSize: 12, fontWeight: 700, backdropFilter: 'blur(6px)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFC805', display: 'inline-block' }} />
                Certified notary at work
              </div>
            </div>
          </div>
          {/* Text on the right */}
          <div style={{ flex: '1 1 420px', maxWidth: 560 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>What we help with</div>
            <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
              Every document service, one trusted team
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#5B6480', margin: '16px 0 0' }}>
              Notary Public Los Angeles, apostille services, mobile notary, document translation, immigration consulting, Live Scan, and passport services — handled end to end.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 44, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#8A91A8' }}>Swipe to explore all services →</div>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <button className="ri-arrow" aria-label="Previous services" onClick={() => scrollBy(-1)} disabled={atStart}>
              <Svg inner={IC.arrowLeft} size={20} sw={2} />
            </button>
            <button className="ri-arrow" aria-label="Next services" onClick={() => scrollBy(1)} disabled={atEnd}>
              <Svg inner={IC.arrowRight} size={20} sw={2} />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="ri-carousel-track" style={{ marginTop: 18 }}>
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="ri-service-card ri-carousel-card"
              style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 14, color: '#1D2540' }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 15, background: '#F2F5FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Svg inner={s.icon} size={24} stroke="#283778" sw={1.75} />
              </div>
              <div className="font-ub" style={{ fontWeight: 700, fontSize: 18 }}>{s.title}</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.55, color: '#5B6480', flex: 1 }}>{s.desc}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#283778', display: 'flex', alignItems: 'center', gap: 6 }}>
                Learn more <span style={{ fontSize: 15 }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
