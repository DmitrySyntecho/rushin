'use client';

import React, { useState } from 'react';
import { Svg, IC } from './icons';

type Item = { icon: string; title: string; body: string };

const ITEMS: Item[] = [
  {
    icon: IC.home,
    title: 'Acknowledgment notarization',
    body: 'Verifies your identity and willingness to sign — used for real estate transactions, powers of attorney, deeds, loan agreements, and trust documents. Documents may be signed beforehand; all signers appear with valid ID to confirm their signatures.',
  },
  {
    icon: IC.cup,
    title: 'Jurat services for sworn statements',
    body: "You sign in front of the notary and take a spoken oath that the content is true — used for affidavits, depositions, financial declarations, and sworn statements. Pre-signed documents can't be accepted for a jurat.",
  },
  {
    icon: IC.monitor,
    title: 'Remote online notarization (RON)',
    body: "California notaries can't perform RON, but California recognizes out-of-state RON done under that state's law. We arrange compliant remote notarization via Zoom — from $35/signature (U.S.) or $100/signature (overseas). Confirm acceptance with your receiving agency first.",
  },
  {
    icon: IC.mapPin,
    title: 'Mobile & in-office notary',
    body: 'We notarize at homes, offices, hospitals, jails, and places of business across Los Angeles, Santa Barbara, Orange, Ventura, and San Diego counties — same-day, before and after business hours, weekends and holidays by request.',
  },
];

export default function Notarization() {
  const [open, setOpen] = useState<boolean[]>([true, false, false, false]);
  const toggle = (i: number) => setOpen((s) => s.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="notarization" style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '96px 24px', display: 'flex', flexWrap: 'wrap', gap: 56 }}>
        <div style={{ flex: '1 1 380px', minWidth: 300 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>Notary services</div>
          <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
            Expert document notarization for all important documents
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#5B6480', margin: '18px 0 0' }}>
            Our California Notary Public offers both acknowledgments and jurats — in-office in Los Angeles and San Diego, or mobile anywhere in Southern California, including evenings, weekends, and holidays by request.
          </p>
          <div style={{ marginTop: 26, background: '#FFF9E6', border: '1px solid #F5E3A0', borderRadius: 16, padding: '18px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <Svg inner={IC.info} size={20} stroke="#B8900A" sw={2} style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: '#6B5407' }}>
              <strong>Take note:</strong> not all documents need notarization — vital records like birth, marriage, and death certificates don&apos;t. Unsure? Call for a quick consultation.
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 480px', minWidth: 300, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {ITEMS.map((it, i) => (
            <div key={it.title} style={{ border: '1px solid #E4E8F3', borderRadius: 18, background: '#FFFFFF', overflow: 'hidden' }}>
              <button
                onClick={() => toggle(i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 12, background: '#F2F5FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Svg inner={it.icon} size={20} stroke="#283778" sw={1.75} />
                </div>
                <div className="font-ub" style={{ flex: 1, fontWeight: 700, fontSize: 16.5, color: '#1D2540' }}>{it.title}</div>
                <Svg inner={IC.chevron} size={16} stroke="#5B6480" sw={2.5} style={{ transform: open[i] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {open[i] && (
                <div style={{ padding: '0 24px 22px 82px', fontSize: 14, lineHeight: 1.65, color: '#5B6480' }}>{it.body}</div>
              )}
            </div>
          ))}
          <div style={{ fontSize: 12, color: '#8A91A8', lineHeight: 1.55, padding: '4px 6px 0' }}>
            A Notary Public who is not an attorney cannot provide legal advice or choose a notarial act for you — you or the document issuer decide which form is required.
          </div>
        </div>
      </div>
    </section>
  );
}
