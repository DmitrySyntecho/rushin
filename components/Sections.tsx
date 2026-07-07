import React from 'react';
import { Svg, IC } from './icons';

const CTA_LABEL = 'Get a Quote';

/* ============ TRUST METRICS ============ */
export function TrustMetrics() {
  const items: { inner: string; big: string; small: string; amber?: boolean }[] = [
    { inner: IC.shieldCheck, big: '185,000+', small: 'successful cases' },
    { inner: IC.award, big: '30+ years', small: 'of experience since 1994' },
    { inner: IC.clock, big: '24-hour', small: 'hotline, always answered' },
    { inner: IC.zap, big: 'Same-day', small: 'service available', amber: true },
    { inner: IC.fileCheck, big: 'Certified', small: 'bonded specialists' },
  ];
  return (
    <section style={{ borderTop: '1px solid #E4E8F3', borderBottom: '1px solid #E4E8F3', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '36px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
        {items.map((it) => (
          <div key={it.big} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: it.amber ? '#FFF7DC' : '#F2F5FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Svg inner={it.inner} size={22} stroke={it.amber ? '#B8900A' : '#283778'} sw={1.75} />
            </div>
            <div>
              <div className="font-ub" style={{ fontWeight: 700, fontSize: 20, color: '#1D2540' }}>{it.big}</div>
              <div style={{ fontSize: 12.5, color: '#5B6480', fontWeight: 500 }}>{it.small}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ HOW IT WORKS ============ */
export function HowItWorks() {
  const steps: { n: string; inner: string; title: string; body: string; amber?: boolean }[] = [
    { n: '1', inner: IC.upload, title: 'Upload or bring your documents', body: 'Send files securely online, or walk into our West Hollywood office.' },
    { n: '2', inner: IC.search, title: 'Get expert review & quote', body: 'A specialist checks requirements and gives you a clear, upfront price.' },
    { n: '3', inner: IC.fileCheck, title: 'We prepare, notarize & file', body: 'Notarization, translation, authentication, or filing — handled for you.' },
    { n: '4', inner: IC.zap, title: 'Receive completed documents', body: 'Pick up, delivery, or mail — as fast as same-day for urgent orders.', amber: true },
  ];
  return (
    <section id="about" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>How it works</div>
          <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
            Four steps. Zero guesswork.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginTop: 56 }}>
          {steps.map((s) => (
            <div key={s.n} style={{ background: '#F6F8FC', borderRadius: 20, padding: '30px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="font-ub" style={{ fontWeight: 700, fontSize: 15, color: s.amber ? '#1D2540' : '#FFFFFF', background: s.amber ? '#FFC805' : '#283778', width: 38, height: 38, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.n}
                </div>
                <Svg inner={s.inner} size={26} stroke="#4AA4EA" sw={1.75} />
              </div>
              <div className="font-ub" style={{ fontWeight: 700, fontSize: 18, color: '#1D2540', marginTop: 20 }}>{s.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: '#5B6480', marginTop: 10 }}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ URGENT / SAME-DAY ============ */
export function UrgentSameDay() {
  return (
    <section style={{ background: 'linear-gradient(120deg, #1D2A5E 0%, #283778 55%, #33438D 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -80, right: -60, width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,200,5,0.16), transparent 65%)' }} />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '80px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 48, position: 'relative' }}>
        <div style={{ flex: '1 1 480px', minWidth: 300 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,200,5,0.14)', border: '1px solid rgba(255,200,5,0.4)', color: '#FFC805', borderRadius: 999, padding: '8px 16px', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Svg inner={IC.zap} size={14} sw={2.2} />
            Urgent service
          </div>
          <h2 className="font-ub" style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.15, fontWeight: 700, color: '#FFFFFF', margin: '20px 0 0' }}>
            Need it done today?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', margin: '16px 0 0', maxWidth: 560 }}>
            Same-day and next-day document services are available for urgent notarization, apostille, authentication, mobile notary, and document preparation requests. Same-day apostille orders close at 12 PM PST.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 30, alignItems: 'center' }}>
            <a href="#final-cta" className="ri-btn-amber" style={{ background: '#FFC805', color: '#1D2540', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16, boxShadow: '0 12px 28px -8px rgba(0,0,0,0.4)' }}>
              Request Urgent Service
            </a>
            <a href="tel:+13236451600" className="ri-btn-ghost-dark" style={{ color: '#FFFFFF', border: '1.5px solid rgba(255,255,255,0.35)', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Svg inner={IC.phone} size={17} sw={2} />
              +1 323 645 1600
            </a>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 26, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 12, padding: '12px 18px', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
            <Svg inner={IC.mapPin} size={16} stroke="#FFC805" sw={2} />
            Mobile notary available in Los Angeles, Santa Barbara, Orange, Ventura &amp; San Diego areas
          </div>
        </div>
        <div style={{ flex: '0 1 340px', minWidth: 280, display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: 300, height: 280 }}>
            <div style={{ position: 'absolute', inset: '30px 20px auto 0', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 20, padding: 22, backdropFilter: 'blur(8px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,200,5,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Svg inner={IC.clock} size={22} stroke="#FFC805" sw={1.75} />
                </div>
                <div>
                  <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 14 }}>Mobile notary ETA</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12 }}>As fast as 1 hour in LA</div>
                </div>
              </div>
              <div style={{ marginTop: 18, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.12)', overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: 'linear-gradient(90deg, #4AA4EA, #FFC805)', borderRadius: 4 }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 600 }}>
                <span>Dispatched</span>
                <span>On the way</span>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, background: '#FFFFFF', borderRadius: 16, padding: '16px 20px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: 12, animation: 'riFloat 5s ease-in-out infinite' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', border: '2px dashed #FFC805', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Svg inner={IC.fileCheck} size={20} stroke="#283778" sw={1.75} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#1D2540' }}>Notarized &amp; sealed</div>
                <div style={{ fontSize: 11.5, color: '#5B6480' }}>Today, 3:42 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ INTERNATIONAL ============ */
export function International() {
  const chips = ['Ukraine', 'Russia', 'Kazakhstan', 'Israel', 'Uzbekistan', '+ more'];
  return (
    <section id="international" style={{ background: '#F6F8FC' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>International documents</div>
            <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
              Documents accepted anywhere in the world
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#5B6480', margin: '16px 0 0' }}>
              Fast apostille and embassy authentication in all 50 states and at the federal level — with strong working relationships with the Secretary of State, FBI, and embassies to expedite every request.
            </p>
          </div>
          <a href="#final-cta" className="ri-btn-primary" style={{ background: '#283778', color: '#FFFFFF', padding: '15px 28px', borderRadius: 14, fontWeight: 700, fontSize: 15, flexShrink: 0, boxShadow: '0 10px 20px -8px rgba(40,55,120,0.45)' }}>
            Start Apostille Request
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 48 }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 20, padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#F2F5FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Svg inner={IC.fileSeal} size={22} stroke="#283778" sw={1.75} />
              </div>
              <div className="font-ub" style={{ fontWeight: 700, fontSize: 18, color: '#1D2540' }}>Apostille — Hague countries</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: '#5B6480', margin: '16px 0 0' }}>
              State and federal apostilles for vital records, court records, academic records, FBI background checks, and business documents used in Hague Convention countries.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
              {chips.map((c) => (
                <span key={c} style={{ background: '#F2F5FB', color: '#283778', borderRadius: 999, padding: '5px 12px', fontSize: 11.5, fontWeight: 600 }}>{c}</span>
              ))}
            </div>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 20, padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#F2F5FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Svg inner={IC.bank} size={22} stroke="#283778" sw={1.75} />
              </div>
              <div className="font-ub" style={{ fontWeight: 700, fontSize: 18, color: '#1D2540' }}>Embassy legalization</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: '#5B6480', margin: '16px 0 0' }}>
              For non-Hague destinations we manage the full authentication chain — commissioning agency, state officials, U.S. Department of State, and the destination country&apos;s consulate.
            </p>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 600, color: '#2E7D46' }}>
              <Svg inner={IC.check} size={14} sw={2.5} />
              Error-free submissions, country-specific handling
            </div>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 20, padding: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#F2F5FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Svg inner={IC.scale} size={22} stroke="#283778" sw={1.75} />
              </div>
              <div className="font-ub" style={{ fontWeight: 700, fontSize: 18, color: '#1D2540' }}>Certified translation</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: '#5B6480', margin: '16px 0 0' }}>
              ATA-certified translators for legal, academic, medical, and personal documents — any source language to any target language, with a signed certificate of accuracy.
            </p>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: 600, color: '#283778' }}>
              <Svg inner={IC.shieldCheck} size={14} sw={2} />
              Guaranteed international acceptance
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, background: 'linear-gradient(120deg, #283778, #33438D)', borderRadius: 20, padding: '26px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Svg inner={IC.shieldCheck} size={26} stroke="#FFC805" sw={1.75} />
            <div style={{ color: '#FFFFFF', fontSize: 14.5, lineHeight: 1.55, fontWeight: 500, maxWidth: 720 }}>
              <strong>Apostille receipt guarantee:</strong> if a submission is late through our fault, we resubmit free and refund 50% of what you paid.
            </div>
          </div>
          <a href="#final-cta" className="ri-amber-link" style={{ color: '#FFC805', fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>Get started →</a>
        </div>
      </div>
    </section>
  );
}

/* ============ IMMIGRATION ============ */
export function Immigration() {
  const cards: { inner: string; title: string; body: string }[] = [
    { inner: IC.feather, title: 'Visa', body: '3-year multi-entry and 6-month stay visas — tourist, business, humanitarian, private.' },
    { inner: IC.globe, title: 'Passport', body: 'Renewals and first-time passports with full application assistance.' },
    { inner: IC.idCard, title: 'Green Card', body: 'Marriage-based, family-based, and DV-lottery applications.' },
    { inner: IC.fingerprint, title: 'Live Scan', body: 'DOJ/FBI fingerprinting for employment, licensing, and immigration.' },
    { inner: IC.searchDoc, title: 'Vital Records', body: 'Birth, death, marriage, divorce, and adoption records retrieved fast.' },
    { inner: IC.idCardWide, title: 'Identity Verification', body: 'Confidential verification for legal, professional, and personal use.' },
  ];
  return (
    <section id="immigration" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px', display: 'flex', flexWrap: 'wrap', gap: 56 }}>
        <div style={{ flex: '1 1 380px', minWidth: 300 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>Immigration · Identity · Travel</div>
          <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
            Specialized immigration &amp; identity documentation
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#5B6480', margin: '18px 0 0' }}>
            Licensed and bonded immigration consultants in West Hollywood and San Diego, serving all nationals — including complex cases, from start to finish.
          </p>
          <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { k: '48–72h', v: 'Expedited visa processing — guaranteed, or your money back.', b: true },
              { k: '2–4d', v: 'Fast-track passport service — no queues, delivered to you.', b: true },
              { k: '100%', v: 'Compliant green card paperwork, prepared by specialists.', b: false },
            ].map((r) => (
              <div key={r.k} style={{ display: 'flex', gap: 16, padding: '18px 0', borderBottom: r.b ? '1px solid #EDF1F9' : 'none' }}>
                <div className="font-ub" style={{ fontWeight: 700, fontSize: 26, color: '#4AA4EA', minWidth: 88 }}>{r.k}</div>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: '#5B6480' }}>{r.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: '1 1 520px', minWidth: 300, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, alignContent: 'start' }}>
          {cards.map((c) => (
            <div key={c.title} className="ri-imm-card" style={{ border: '1px solid #E4E8F3', borderRadius: 18, padding: 24, background: '#FFFFFF' }}>
              <Svg inner={c.inner} size={24} stroke="#283778" sw={1.75} />
              <div className="font-ub" style={{ fontWeight: 700, fontSize: 16, color: '#1D2540', marginTop: 14 }}>{c.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: '#5B6480', marginTop: 6 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ OFFICES ============ */
export function Offices() {
  const offices = [
    {
      img: '/images/office-weho.webp',
      badge: 'WALK-INS WELCOME',
      name: 'West Hollywood',
      addr: (<>7869 Santa Monica Blvd, CA 90046<br />Near Fairfax Ave &amp; Sunset Blvd</>),
      hours: [
        ['Mon–Fri', '9:00 AM – 5:00 PM'],
        ['Saturday', 'By appointment'],
        ['Sunday', 'Closed'],
      ] as [string, string][],
      note: null as string | null,
      map: 'https://maps.google.com/?q=7869+Santa+Monica+Blvd,+CA+90046',
    },
    {
      img: '/images/office-sd.webp',
      badge: 'BY APPOINTMENT',
      name: 'San Diego',
      addr: (<>11852 Zach Dr, San Diego, CA 92128<br />Off Rancho Bernardo Rd &amp; I-15</>),
      hours: [['All week', 'By appointment only']] as [string, string][],
      note: 'Please call ahead to schedule your visit.',
      map: 'https://maps.google.com/?q=11852+Zach+Dr,+San+Diego,+CA+92128',
    },
  ];
  return (
    <section id="offices" style={{ background: '#F6F8FC' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>Our offices</div>
          <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
            Two locations in Southern California
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 48, maxWidth: 980, marginLeft: 'auto', marginRight: 'auto' }}>
          {offices.map((o) => (
            <div key={o.name} style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 22, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 150, position: 'relative', overflow: 'hidden' }}>
                <img src={o.img} alt={`${o.name} office`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(29,42,94,0.78), rgba(51,67,141,0.55))' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Svg inner={IC.mapPin} size={26} stroke="#FFC805" sw={1.75} />
                  </div>
                </div>
                <div style={{ position: 'absolute', top: 16, left: 20, background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.3)', color: '#FFFFFF', borderRadius: 999, padding: '5px 14px', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.06em' }}>
                  {o.badge}
                </div>
              </div>
              <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                <div className="font-ub" style={{ fontWeight: 700, fontSize: 21, color: '#1D2540' }}>{o.name}</div>
                <div style={{ fontSize: 14, color: '#5B6480', lineHeight: 1.6 }}>{o.addr}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13.5, color: '#1D2540', fontWeight: 500 }}>
                  {o.hours.map(([a, b]) => (
                    <div key={a} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                      <span style={{ color: '#5B6480' }}>{a}</span>
                      <span>{b}</span>
                    </div>
                  ))}
                  {o.note && <div style={{ fontSize: 12.5, color: '#8A91A8' }}>{o.note}</div>}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 'auto', paddingTop: 10 }}>
                  <a href={o.map} target="_blank" rel="noopener" className="ri-office-primary" style={{ flex: 1, textAlign: 'center', background: '#283778', color: '#FFFFFF', padding: 13, borderRadius: 12, fontWeight: 700, fontSize: 13.5 }}>Directions</a>
                  <a href="tel:+13236451600" className="ri-outline-sm" style={{ flex: 1, textAlign: 'center', border: '1.5px solid #C9D2E8', color: '#283778', padding: 13, borderRadius: 12, fontWeight: 700, fontSize: 13.5 }}>Call office</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TEAM ============ */
export function Team() {
  const team = [
    { img: '/images/team-vadim.webp', name: 'Vadim', role: 'Executive Director & Immigration Consultant' },
    { img: '/images/team-karina.webp', name: 'Karina', role: 'Director of Production' },
    { img: '/images/team-anna.webp', name: 'Anna', role: 'Customer Service Representative' },
    { img: '/images/team-nona.webp', name: 'Nona', role: 'Customer Success Manager' },
    { img: '/images/team-diana.webp', name: 'Diana', role: 'Customer Support' },
  ];
  return (
    <section style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
          <div style={{ maxWidth: 560 }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>Our team</div>
            <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
              People who handle your case personally
            </h2>
          </div>
          <a href="https://rushindocumentation.com/about/#ourteam" target="_blank" rel="noopener" className="ri-outline-sm" style={{ border: '1.5px solid #C9D2E8', color: '#283778', padding: '13px 26px', borderRadius: 12, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
            View all team
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 20, marginTop: 44 }}>
          {team.map((m) => (
            <div key={m.name} className="ri-team-card" style={{ background: '#F6F8FC', borderRadius: 20, overflow: 'hidden' }}>
              <div style={{ aspectRatio: '1 / 1.05', overflow: 'hidden' }}>
                <img src={m.img} alt={`${m.name} — ${m.role}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
              <div style={{ padding: '18px 20px 22px' }}>
                <div className="font-ub" style={{ fontWeight: 700, fontSize: 17, color: '#1D2540' }}>{m.name}</div>
                <div style={{ fontSize: 12.5, color: '#5B6480', marginTop: 4, lineHeight: 1.45 }}>{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ REVIEWS ============ */
export function Reviews() {
  const reviews = [
    { text: '"Karina helped me apply for my green card — her customer service was amazing from the first phone call through the whole process. Without her knowledge of all the details, I wouldn\'t have been able to do it myself."', letter: 'A', bg: '#283778', name: 'Andrey Pak', tag: 'Green Card application' },
    { text: '"Wonderful staff and a pleasure to work with. They are efficient, always aware of the status, and will guide you throughout the process so there is never confusion in what to do next."', letter: 'G', bg: '#33438D', name: 'Gary V', tag: 'Document services' },
    { text: '"I found Rush In while looking for a place to get a power of attorney. The girl over the phone answered all my questions. Got my POA on time and super happy with the service I was provided."', letter: 'K', bg: '#4AA4EA', name: 'Kristina Pozdnyakova', tag: 'Power of attorney' },
  ];
  return (
    <section style={{ background: '#F6F8FC' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>Reviews</div>
          <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
            Trusted by 185,000+ clients
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 16, background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 999, padding: '10px 20px' }}>
            <span style={{ color: '#FFC805', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#1D2540' }}>5.0 · Google Reviews</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 48 }}>
          {reviews.map((r) => (
            <div key={r.name} style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ color: '#FFC805', fontSize: 15, letterSpacing: 2 }}>★★★★★</span>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: '#1D2540', margin: 0, flex: 1 }}>{r.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="font-ub" style={{ width: 40, height: 40, borderRadius: '50%', background: r.bg, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>{r.letter}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: '#1D2540' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: '#8A91A8' }}>{r.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 24, justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 14, padding: '12px 20px', fontSize: 13, fontWeight: 600, color: '#1D2540' }}>
            <Svg inner={IC.play} size={16} stroke="#283778" sw={2} />
            Video testimonials: Ekaterina, Nicholas, Kristina
          </div>
          <a href="https://www.youtube.com/channel/UCTXcTF4jHj41ZlBYIsfR1jQ" target="_blank" rel="noopener" className="ri-outline-sm" style={{ display: 'flex', alignItems: 'center', gap: 8, borderRadius: 14, padding: '12px 20px', fontSize: 13, fontWeight: 700, color: '#283778', border: '1.5px solid #C9D2E8' }}>
            Watch on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
export function FinalCta() {
  const inputStyle: React.CSSProperties = { border: '1.5px solid #E4E8F3', borderRadius: 12, padding: '13px 16px', fontFamily: "'Montserrat', sans-serif", fontSize: 14, color: '#1D2540', outline: 'none' };
  return (
    <section id="final-cta" style={{ background: 'linear-gradient(135deg, #F6F8FC 0%, #EAF2FC 60%, #FFF6DC 130%)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px', display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'center' }}>
        <div style={{ flex: '1 1 460px', minWidth: 300 }}>
          <h2 className="font-ub" style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.18, fontWeight: 700, color: '#1D2540', margin: 0 }}>
            Need notary, apostille, translation, or immigration document help?
          </h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#5B6480', margin: '18px 0 0', maxWidth: 560 }}>
            Send your documents today and our certified team will guide you through the fastest, safest next step.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32 }}>
            <a href="tel:+13236451600" className="ri-btn-primary" style={{ background: '#283778', color: '#FFFFFF', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16, boxShadow: '0 12px 24px -8px rgba(40,55,120,0.45)' }}>Book a Consultation</a>
            <a href="tel:+13236451600" className="ri-btn-outline" style={{ background: '#FFFFFF', color: '#283778', border: '1.5px solid #C9D2E8', padding: '16px 30px', borderRadius: 14, fontWeight: 700, fontSize: 16 }}>Call +1 323 645 1600</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28, alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#5B6480' }}>We&apos;re in messengers:</span>
            <a href="https://t.me/rushindocumentationl" target="_blank" rel="noopener" className="ri-chip-link" style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 999, padding: '8px 16px', fontSize: 12.5, fontWeight: 700, color: '#283778' }}>Telegram</a>
            <a href="https://wa.me/13108671186" target="_blank" rel="noopener" className="ri-chip-link" style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 999, padding: '8px 16px', fontSize: 12.5, fontWeight: 700, color: '#283778' }}>WhatsApp</a>
            <a href="viber://chat?number=13108671186" className="ri-chip-link" style={{ display: 'flex', alignItems: 'center', gap: 7, background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 999, padding: '8px 16px', fontSize: 12.5, fontWeight: 700, color: '#283778' }}>Viber</a>
          </div>
        </div>
        <div id="contacts" style={{ flex: '1 1 400px', minWidth: 300, maxWidth: 480 }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E4E8F3', borderRadius: 24, padding: 36, boxShadow: '0 32px 64px -20px rgba(40,55,120,0.25)' }}>
            <div className="font-ub" style={{ fontWeight: 700, fontSize: 20, color: '#1D2540' }}>Upload your documents</div>
            <div style={{ fontSize: 13, color: '#5B6480', marginTop: 6 }}>We&apos;ll review and reply with a quote — usually within the hour.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12.5, fontWeight: 700, color: '#1D2540' }}>
                Full name
                <input type="text" placeholder="Your full name" style={inputStyle} />
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12.5, fontWeight: 700, color: '#1D2540' }}>
                  Email
                  <input type="email" placeholder="you@email.com" style={{ ...inputStyle, minWidth: 0 }} />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12.5, fontWeight: 700, color: '#1D2540' }}>
                  Phone
                  <input type="tel" placeholder="+1 (___) ___-____" style={{ ...inputStyle, minWidth: 0 }} />
                </label>
              </div>
              <div className="ri-upload" style={{ border: '2px dashed #C9D2E8', borderRadius: 14, padding: 26, textAlign: 'center', background: '#FAFBFE', cursor: 'pointer' }}>
                <Svg inner={IC.upload} size={26} stroke="#283778" sw={1.75} style={{ margin: '0 auto', display: 'block' }} />
                <div style={{ fontSize: 13.5, fontWeight: 700, color: '#283778', marginTop: 10 }}>Drop files here or click to select</div>
                <div style={{ fontSize: 11.5, color: '#8A91A8', marginTop: 4 }}>PDF, JPG, PNG, DOCX, ZIP · up to 20 MB</div>
              </div>
              <button className="ri-send" style={{ background: '#283778', color: '#FFFFFF', border: 'none', padding: 16, borderRadius: 13, fontWeight: 700, fontSize: 15, fontFamily: "'Montserrat', sans-serif", cursor: 'pointer', boxShadow: '0 10px 20px -8px rgba(40,55,120,0.45)' }}>
                Send documents
              </button>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 11.5, color: '#8A91A8' }}>
                <Svg inner={IC.lock} size={13} sw={2} />
                Confidential — your files are handled securely
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
