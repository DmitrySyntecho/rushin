'use client';

import React, { useState } from 'react';

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Can a notary refuse to notarize a document?',
    a: 'Yes. A notary may decline if the document appears fraudulent, the signer seems coerced or doesn’t understand what they’re signing, valid ID can’t be provided, the signer can’t appear in person, or the document has incomplete details or missing signature lines.',
  },
  {
    q: 'Do both parties need to be present for a notarized document?',
    a: 'In most cases only the signers need to be present. Parties in separate locations can have their signatures notarized individually. A pre-signed document can be notarized as an acknowledgment as long as the signers are present to verify their signatures.',
  },
  {
    q: 'Can I get something notarized without an ID?',
    a: 'California allows “credible witnesses” who can vouch for your identity: one witness if they know both you and the notary, or two witnesses who don’t personally know the notary. Each credible witness must present valid identification.',
  },
  {
    q: 'How much does a mobile notary cost?',
    a: 'Our base notary fee is $25 plus a $10 service provider fee. Mobile notary pricing depends on travel distance, location, number of signatures, and schedule — call us and we’ll give you a free quote.',
  },
  {
    q: 'What documents need to be notarized?',
    a: 'Common examples: real estate deeds, mortgages, powers of attorney, adoption papers, wills, trusts, medical directives, and financial documents. Affidavits and depositions require a jurat. Vital records and personal letters do not need notarization — when unsure, check with the issuing agency.',
  },
  {
    q: 'Can a notary notarize a document that’s already been signed?',
    a: 'Yes — for acknowledgments. The signers must still appear so the notary can confirm their identities and they can confirm the signatures are theirs. For a jurat, signing must happen in front of the Notary Public.',
  },
  {
    q: 'How long does a notarized document remain valid?',
    a: 'A notarization generally doesn’t expire. Exceptions: the document itself states an expiration date, specific laws require renewal, or the receiving institution requires an updated notarization — common for powers of attorney and medical directives. Always confirm with the receiving party.',
  },
  {
    q: 'Can a California notary perform online notarization?',
    a: 'No — California notaries must be physically present with the signer. However, California recognizes out-of-state remote online notarizations performed under that state’s law, and we can arrange compliant RON or send a mobile notary to your location instead.',
  },
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{ background: '#FFFFFF' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', color: '#4AA4EA', textTransform: 'uppercase' }}>FAQ</div>
          <h2 className="font-ub" style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', lineHeight: 1.2, fontWeight: 700, color: '#1D2540', margin: '12px 0 0' }}>
            Frequently asked questions about notary services
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 48 }}>
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={f.q} style={{ border: '1px solid #E4E8F3', borderRadius: 16, background: '#FFFFFF', overflow: 'hidden', minHeight: 60 }}>
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, padding: '19px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}
                >
                  <div className="font-ub" style={{ flex: 1, fontWeight: 700, fontSize: 15.5, color: '#1D2540' }}>{f.q}</div>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#F2F5FB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#283778', fontWeight: 700, fontSize: 16 }}>
                    {isOpen ? '−' : '+'}
                  </div>
                </button>
                {isOpen && <div style={{ padding: '0 60px 22px 24px', fontSize: 14, lineHeight: 1.7, color: '#5B6480' }}>{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
