import React from 'react';

type SvgProps = {
  inner: string;
  size?: number;
  stroke?: string;
  sw?: number;
  style?: React.CSSProperties;
};

/**
 * Renders a Lucide-style icon from a raw inner-SVG markup string.
 * Ported 1:1 from the original design's inline SVGs.
 */
export function Svg({ inner, size = 24, stroke = 'currentColor', sw = 1.75, style }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}

export const IC = {
  chevron: '<path d="M6 9l6 6 6-6"></path>',
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"></path>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M17 8l-5-5-5 5"></path><path d="M12 3v12"></path>',
  shieldCheck: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path>',
  clock: '<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',
  award: '<circle cx="12" cy="8" r="6"></circle><path d="M15.5 13l1.5 9-5-3-5 3 1.5-9"></path>',
  mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle>',
  zap: '<path d="M13 2L3 14h7l-1 8 11-13h-7l0-7z"></path>',
  fileCheck: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M9 15l2 2 4-4"></path>',
  fileSeal: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><circle cx="12" cy="15" r="3"></circle>',
  fileLines: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8M8 17h5"></path>',
  notary: '<circle cx="12" cy="7" r="4"></circle><path d="M7 11v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5"></path><path d="M5 21h14"></path>',
  scale: '<path d="M5 8l6 6"></path><path d="M4 14l6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="M22 22l-5-10-5 10"></path><path d="M14 18h6"></path>',
  feather:
    '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>',
  globe: '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z"></path>',
  idCard: '<rect x="2" y="5" width="20" height="14" rx="2"></rect><circle cx="8" cy="11" r="2"></circle><path d="M5 17c.5-1.5 1.7-2 3-2s2.5.5 3 2"></path><path d="M14 9h6M14 12h6M14 15h4"></path>',
  fingerprint: '<path d="M12 11c0-3 2-5 2-5s2 2 2 5-2 5-2 5-2-2-2-5z"></path><path d="M8 8c-1.5 1.5-2 3.5-2 5.5C6 17 8 20 12 21c4-1 6-4 6-7.5 0-2-.5-4-2-5.5"></path><path d="M12 3v3"></path>',
  searchDoc: '<circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path><path d="M8 11h6M11 8v6"></path>',
  heart: '<path d="M20.4 12.6a5.5 5.5 0 0 0-8.4-7 5.5 5.5 0 0 0-8.4 7L12 21z"></path>',
  search: '<circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path>',
  home: '<path d="M3 21h18"></path><path d="M5 21V7l7-4 7 4v14"></path><path d="M9 21v-6h6v6"></path>',
  cup: '<path d="M12 3v2M8 21h8M12 17v4"></path><path d="M7 5h10l-1.5 8a3.5 3.5 0 0 1-7 0z"></path>',
  monitor: '<rect x="2" y="4" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 18v3"></path><path d="M9 11l2 2 4-4"></path>',
  info: '<circle cx="12" cy="12" r="10"></circle><path d="M12 8v5M12 16.5v.5"></path>',
  check: '<path d="M20 6L9 17l-5-5"></path>',
  bank: '<path d="M3 21h18"></path><path d="M5 21V7l7-4 7 4v14"></path><path d="M9 10h.01M15 10h.01M9 14h.01M15 14h.01"></path>',
  idCardWide: '<rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><path d="M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2"></path><path d="M15 8h4M15 12h4"></path>',
  play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  send: '<path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4z"></path>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><path d="M17.5 6.5h.01"></path>',
  podcast: '<circle cx="12" cy="11" r="3"></circle><path d="M12 14v7"></path><path d="M8 21h8"></path><path d="M17.7 8a6 6 0 1 0-11.4 0"></path>',
  arrowLeft: '<path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path>',
  arrowRight: '<path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>',
};
