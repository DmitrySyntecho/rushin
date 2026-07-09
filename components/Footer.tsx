import React from 'react';
import { Svg, IC } from './icons';

const socials: { label: string; href: string; text?: string; icon?: string }[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/rushindocumentation', text: 'f' },
  { label: 'Instagram', href: 'https://www.instagram.com/rushindocumentation/', icon: IC.instagram },
  { label: 'VK', href: 'https://vk.com/rushindoc', text: 'VK' },
  { label: 'Telegram', href: 'https://t.me/rushindocumentationl', icon: IC.send },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCTXcTF4jHj41ZlBYIsfR1jQ', icon: IC.play },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vadim-pechersky-0a89a21a4', text: 'in' },
  { label: 'Podcast', href: 'https://soundcloud.com/rushindocumentation', icon: IC.podcast },
];

const menu: { label: string; href: string; ext?: boolean }[] = [
  { label: 'Home', href: '/#top' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'News', href: 'https://rushindocumentation.com/news/', ext: true },
  { label: 'Contacts', href: '/#contacts' },
  { label: 'Our Offices', href: '/#offices' },
];

const services: { label: string; href: string }[] = [
  { label: 'Notary Public Los Angeles', href: '/#services' },
  { label: 'Apostille Services', href: '/#international' },
  { label: 'Mobile Notary', href: '/#notarization' },
  { label: 'Document Translation', href: '/#international' },
  { label: 'Russian Visa', href: '/#immigration' },
  { label: 'Green Card', href: '/#immigration' },
  { label: 'Live Scan', href: '/#immigration' },
  { label: 'Same-Day Marriage Services', href: '/#services' },
];

const colTitle: React.CSSProperties = { fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 14, color: '#FFFFFF', letterSpacing: '0.06em', textTransform: 'uppercase' };

export default function Footer() {
  return (
    <footer id="news" style={{ background: '#1B2450', color: '#B9C1DE' }}>
      <div className="ri-foot-wrap" style={{ maxWidth: 1240, margin: '0 auto', padding: '72px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 44 }}>
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span className="font-ub" style={{ fontWeight: 700, fontSize: 20, color: '#283778' }}>R</span>
                <span style={{ position: 'absolute', right: -3, bottom: -3, width: 13, height: 13, borderRadius: '50%', background: '#FFC805', border: '2px solid #1B2450' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span className="font-ub" style={{ fontWeight: 700, fontSize: 18, color: '#FFFFFF', letterSpacing: '-0.01em' }}>Rush In</span>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', color: '#8A93BC', textTransform: 'uppercase', marginTop: 3 }}>Documentation Center</span>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, margin: '18px 0 0', maxWidth: 280 }}>
              California-born company since 1994. Notary Public, apostille, certified translation, Live Scan, passport &amp; visa services, and immigration documentation in Southern California.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label} className="ri-social" style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: 12, fontWeight: 700 }}>
                  {s.icon ? <Svg inner={s.icon} size={16} sw={2} /> : s.text}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={colTitle}>Menu</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 18, fontSize: 13.5 }}>
              {menu.map((m) => (
                <a key={m.label} href={m.href} target={m.ext ? '_blank' : undefined} rel={m.ext ? 'noopener' : undefined} className="ri-foot" style={{ color: '#B9C1DE' }}>{m.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={colTitle}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 18, fontSize: 13.5 }}>
              {services.map((s, i) => (
                <a key={`${s.label}-${i}`} href={s.href} className="ri-foot" style={{ color: '#B9C1DE' }}>{s.label}</a>
              ))}
            </div>
          </div>

          <div>
            <div style={colTitle}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 18, fontSize: 13.5, lineHeight: 1.6 }}>
              <a href="tel:+13236451600" className="ri-amber-link" style={{ color: '#FFC805', fontWeight: 700, fontSize: 15 }}>+1 323 645 1600</a>
              <div><strong style={{ color: '#FFFFFF' }}>West Hollywood</strong><br />7869 Santa Monica Blvd, CA 90046</div>
              <div><strong style={{ color: '#FFFFFF' }}>San Diego</strong><br />11852 Zach Dr, CA 92128<br /><span style={{ fontSize: 12, color: '#8A93BC' }}>By appointment only</span></div>
            </div>
            <div style={{ marginTop: 22 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>Newsletter</div>
              <div style={{ display: 'flex', gap: 8 }}>
                <input type="email" placeholder="Your email" className="ri-input-dark" style={{ flex: 1, minWidth: 0, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 11, padding: '12px 14px', fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: '#FFFFFF', outline: 'none' }} />
                <button className="ri-sub" style={{ background: '#FFC805', color: '#1D2540', border: 'none', borderRadius: 11, padding: '12px 18px', fontWeight: 700, fontSize: 13, fontFamily: "'Montserrat', sans-serif", cursor: 'pointer' }}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 52, padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 11.5, lineHeight: 1.7, color: '#8A93BC' }}>
          <strong style={{ color: '#B9C1DE' }}>Disclaimer:</strong> Rush in Professional Services Inc. DBA Rush in Documentation Center is NOT a Law Firm. We do NOT provide legal advice. We are a team of bonded immigration consultants (State of California, Secretary of State, Surety Bond Immigration Consultant 10126056, Business and Professions Code section 22443.1), Court Certified Translators, Notary Publics, Passport, and Visa Specialists. RushIn Documentation does NOT represent the interests of any consulate and is NOT an intermediary.
        </div>
        <div style={{ padding: '20px 0 28px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
          <div>Copyright © 2026. All Rights Reserved</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="https://rushindocumentation.com/styleguide/" target="_blank" rel="noopener" className="ri-foot" style={{ color: '#B9C1DE' }}>Styleguide</a>
            <a href="/privacy" className="ri-foot" style={{ color: '#B9C1DE' }}>Privacy Policy</a>
            <a href="https://www.syntecho.com/" target="_blank" rel="noopener" className="ri-foot" style={{ color: '#B9C1DE' }}>Powered by Syntecho</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
