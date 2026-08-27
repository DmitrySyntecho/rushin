// Composes downloadable brand ad-banners: bg + scrim + logo + brand text.
import sharp from 'sharp';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const F = "Montserrat, 'Segoe UI', Arial, sans-serif";
const FH = "Ubuntu, 'Segoe UI', Arial, sans-serif";

const banners = [
  {
    out: 'banner-16x9', src: 'public/brand/banners/bg-16x9.webp', W: 1600, H: 900, align: 'left',
    eyebrow: 'SINCE 1994 · SOUTHERN CALIFORNIA',
    title: ['Notary, Apostille &', 'Documents — Done Right'],
    offer: 'Same-day available',
  },
  {
    out: 'banner-1x1', src: 'public/brand/banners/bg-1x1.webp', W: 1080, H: 1080, align: 'center',
    eyebrow: 'RUSH IN DOCUMENTATION',
    title: ['Apostille in', '190+ countries'],
    offer: 'Get a quote today',
  },
  {
    out: 'banner-9x16', src: 'public/brand/banners/bg-9x16.webp', W: 1080, H: 1920, align: 'center',
    eyebrow: 'URGENT SERVICE',
    title: ['Need it', 'done today?'],
    offer: 'Call 24/7 hotline',
  },
];

for (const b of banners) {
  const left = b.align === 'left';
  const pad = Math.round(b.W * (left ? 0.06 : 0.08));
  const cx = left ? pad : b.W / 2;
  const anchor = left ? 'start' : 'middle';
  const titleSize = Math.round(b.W * (b.W === 1600 ? 0.052 : 0.085));
  const lineH = Math.round(titleSize * 1.12);
  // vertical anchor: 16:9 center-left, others lower third
  let ty = left ? Math.round(b.H * 0.46) : Math.round(b.H * 0.62);
  const scrim = left
    ? `<linearGradient id="s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#10162f" stop-opacity="0.88"/><stop offset="0.55" stop-color="#10162f" stop-opacity="0.5"/><stop offset="1" stop-color="#10162f" stop-opacity="0.12"/></linearGradient>`
    : `<linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0.35" stop-color="#10162f" stop-opacity="0.25"/><stop offset="1" stop-color="#10162f" stop-opacity="0.82"/></linearGradient>`;

  const titleSpans = b.title
    .map((l, i) => `<text x="${cx}" y="${ty + i * lineH}" font-family="${FH}" font-size="${titleSize}" font-weight="700" fill="#ffffff" text-anchor="${anchor}">${esc(l)}</text>`)
    .join('');
  const eyeY = ty - Math.round(titleSize * 0.9);
  const offerY = ty + b.title.length * lineH + Math.round(titleSize * 0.5);
  const offerW = Math.round(b.offer.length * titleSize * 0.34) + 70;
  const offerX = left ? cx : cx - offerW / 2;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${b.W}" height="${b.H}">
    <defs>${scrim}</defs>
    <rect width="${b.W}" height="${b.H}" fill="url(#s)"/>
    <text x="${cx}" y="${eyeY}" font-family="${F}" font-size="${Math.round(b.W * 0.017)}" font-weight="700" letter-spacing="3" fill="#FFC805" text-anchor="${anchor}">${esc(b.eyebrow)}</text>
    ${titleSpans}
    <rect x="${offerX}" y="${offerY}" width="${offerW}" height="${Math.round(titleSize * 0.92)}" rx="${Math.round(titleSize * 0.28)}" fill="#FFC805"/>
    <text x="${offerX + offerW / 2}" y="${offerY + Math.round(titleSize * 0.62)}" font-family="${F}" font-size="${Math.round(titleSize * 0.42)}" font-weight="700" fill="#1D2540" text-anchor="middle">${esc(b.offer)}</text>
  </svg>`;

  const bg = await sharp(b.src).resize(b.W, b.H, { fit: 'cover' }).toBuffer();
  const logoH = Math.round(b.H * (left ? 0.05 : 0.04));
  const logo = await sharp('public/rushin-logo-white.svg').resize({ height: logoH }).png().toBuffer();
  const lm = await sharp(logo).metadata();
  const logoLeft = left ? pad : Math.round((b.W - lm.width) / 2);
  const logoTop = left ? Math.round(b.H * 0.10) : Math.round(b.H * 0.10);

  await sharp(bg)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }, { input: logo, top: logoTop, left: logoLeft }])
    .png()
    .toFile(`public/brand/banners/${b.out}.png`);
  console.log('made', b.out);
}
