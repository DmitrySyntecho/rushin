'use client';

import React, { useEffect, useState } from 'react';
import { Svg, IC } from './icons';

const OPEN_EVENT = 'rushin:open-consult';

export function openConsult() {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(OPEN_EVENT));
}

/** A button (or anchor-styled button) that opens the global consultation modal. */
export function BookButton({
  label = 'Book a Consultation',
  className,
  style,
}: {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <button type="button" onClick={openConsult} className={className} style={{ cursor: 'pointer', border: 'none', font: 'inherit', ...style }}>
      {label}
    </button>
  );
}

const SERVICE_OPTIONS = [
  'Russian Visa',
  'Apostille Services',
  'Mobile Notary',
  'Document Translation',
  'Live Scan',
  'Green Card',
  'Marriage-Based Green Card',
  'Green Card Through the Diversity',
  'Same-Day Marriage Services',
  'Notary Public',
  'Passport Services',
  'Other',
];

type Data = {
  service: string;
  status: 'new' | 'repeat' | '';
  name: string;
  email: string;
  phone: string;
  message: string;
  news: boolean;
};

const EMPTY: Data = { service: SERVICE_OPTIONS[0], status: '', name: '', email: '', phone: '', message: '', news: true };

const inputStyle: React.CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  border: '1.5px solid #E4E8F3',
  borderRadius: 12,
  padding: '13px 15px',
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 15,
  color: '#1D2540',
  outline: 'none',
  background: '#FFFFFF',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12.5,
  fontWeight: 700,
  color: '#1D2540',
  marginBottom: 7,
  letterSpacing: '0.02em',
};

export default function ConsultModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(EMPTY);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setData(EMPTY);
      setStep(1);
      setDone(false);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const set = (patch: Partial<Data>) => setData((d) => ({ ...d, ...patch }));

  const step1ok = data.service && data.status;
  const emailOk = /.+@.+\..+/.test(data.email);
  const step2ok = data.name.trim().length > 1 && emailOk && data.phone.trim().length >= 7;

  const titles = ['Order Consultation', 'Your contact details', 'A few more details'];
  const subtitles = [
    'What can we help you with?',
    "We'll reply with a quote — usually within the hour.",
    'Tell us anything that helps us prepare.',
  ];

  if (!open) return null;

  return (
    <div
      onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(15,21,52,0.55)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 540,
          maxHeight: '92vh',
          overflowY: 'auto',
          background: '#FFFFFF',
          borderRadius: 24,
          boxShadow: '0 40px 80px -24px rgba(15,21,52,0.6)',
          padding: '30px 30px 26px',
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="ri-phonebtn"
          style={{ position: 'absolute', top: 18, right: 18, width: 38, height: 38, borderRadius: '50%', background: '#FFC805', border: 'none', color: '#1D2540', fontSize: 20, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}
        >
          ×
        </button>

        {done ? (
          <div style={{ textAlign: 'center', padding: '24px 6px 10px' }}>
            <div style={{ width: 68, height: 68, borderRadius: '50%', background: '#F0F9EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
              <Svg inner={IC.check} size={34} stroke="#2E7D46" sw={2.5} />
            </div>
            <h3 className="font-ub" style={{ fontSize: 24, fontWeight: 700, color: '#1D2540', margin: '20px 0 0' }}>Request sent!</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5B6480', margin: '12px auto 0', maxWidth: 380 }}>
              Thank you, {data.name.split(' ')[0] || 'there'}. Our certified team will reach out about your <strong style={{ color: '#283778' }}>{data.service}</strong> request — usually within the hour.
            </p>
            <button type="button" onClick={() => setOpen(false)} className="ri-btn-primary" style={{ marginTop: 26, background: '#283778', color: '#FFFFFF', border: 'none', padding: '15px 34px', borderRadius: 13, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: "'Montserrat', sans-serif" }}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="font-ub" style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>
              Step {step} of 3
            </div>
            <h3 className="font-ub" style={{ fontSize: 25, fontWeight: 700, color: '#1D2540', margin: '6px 0 0', paddingRight: 40 }}>{titles[step - 1]}</h3>
            <p style={{ fontSize: 13.5, color: '#5B6480', margin: '6px 0 0' }}>{subtitles[step - 1]}</p>

            <div style={{ display: 'flex', gap: 8, margin: '20px 0 24px' }}>
              {[1, 2, 3].map((n) => (
                <div key={n} style={{ flex: 1, height: 6, borderRadius: 999, background: n <= step ? '#283778' : '#E4E8F3', transition: 'background 0.25s' }} />
              ))}
            </div>

            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div>
                  <label style={labelStyle}>Service</label>
                  <select value={data.service} onChange={(e) => set({ service: e.target.value })} style={{ ...inputStyle, appearance: 'none', backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%235B6480\' stroke-width=\'2.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M6 9l6 6 6-6\'/></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 15px center', paddingRight: 40 }}>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Are you a…</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {(['new', 'repeat'] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => set({ status: v })}
                        style={{
                          padding: '14px 10px',
                          borderRadius: 12,
                          border: `1.5px solid ${data.status === v ? '#283778' : '#E4E8F3'}`,
                          background: data.status === v ? '#F2F5FB' : '#FFFFFF',
                          color: '#1D2540',
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: 'pointer',
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {v === 'new' ? 'New client' : 'Repeat client'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={labelStyle}>Full name</label>
                  <input type="text" value={data.name} onChange={(e) => set({ name: e.target.value })} placeholder="Your full name" style={inputStyle} className="ri-modal-input" />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" value={data.email} onChange={(e) => set({ email: e.target.value })} placeholder="you@email.com" style={inputStyle} className="ri-modal-input" />
                </div>
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" value={data.phone} onChange={(e) => set({ phone: e.target.value })} placeholder="+1 (___) ___-____" style={inputStyle} className="ri-modal-input" />
                </div>
                <p style={{ fontSize: 11.5, lineHeight: 1.55, color: '#8A91A8', margin: '2px 0 0' }}>
                  By providing your contact details you agree to our{' '}
                  <a href="/privacy" target="_blank" rel="noopener" style={{ color: '#283778', fontWeight: 700, textDecoration: 'underline' }}>Privacy Policy</a>{' '}
                  and consent to be contacted about your request by phone, email, or messenger.
                </p>
              </div>
            )}

            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={labelStyle}>Message (optional)</label>
                  <textarea value={data.message} onChange={(e) => set({ message: e.target.value })} placeholder="Type your message…" rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }} className="ri-modal-input" />
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 13.5, color: '#5B6480' }}>
                  <input type="checkbox" checked={data.news} onChange={(e) => set({ news: e.target.checked })} style={{ width: 18, height: 18, accentColor: '#283778' }} />
                  Join our mailing list for updates
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#8A91A8' }}>
                  <Svg inner={IC.lock} size={13} sw={2} />
                  Your details are kept confidential.
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: 12, marginTop: 26 }}>
              {step > 1 && (
                <button type="button" onClick={() => setStep((s) => s - 1)} style={{ flex: '0 0 auto', padding: '15px 22px', borderRadius: 13, border: '1.5px solid #C9D2E8', background: '#FFFFFF', color: '#283778', fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: "'Montserrat', sans-serif" }}>
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={step === 1 ? !step1ok : !step2ok}
                  style={{ flex: 1, padding: '15px 22px', borderRadius: 13, border: 'none', background: (step === 1 ? step1ok : step2ok) ? '#283778' : '#AEB7D4', color: '#FFFFFF', fontWeight: 700, fontSize: 15, cursor: (step === 1 ? step1ok : step2ok) ? 'pointer' : 'not-allowed', fontFamily: "'Montserrat', sans-serif", transition: 'background 0.15s' }}
                >
                  Continue
                </button>
              ) : (
                <button type="button" onClick={() => setDone(true)} className="ri-btn-amber" style={{ flex: 1, padding: '15px 22px', borderRadius: 13, border: 'none', background: '#FFC805', color: '#1D2540', fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", boxShadow: '0 12px 24px -10px rgba(184,144,10,0.6)' }}>
                  Send request
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
