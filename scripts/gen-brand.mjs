// Single source of truth for the Rush In brand tokens.
// Generates: public/design-tokens.json, public/design-tokens.css,
// app/styleguide/tokens.css, logo mono/white variants, and logo PNG exports.
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const TOKENS = {
  color: {
    'brand-primary': '#283778',
    'brand-primary-hover': '#33438D',
    'brand-primary-deep': '#1D2A5E',
    'brand-ink': '#1D2540',
    'brand-navy-footer': '#1B2450',
    'brand-navy-hero': '#151C40',
    'brand-accent': '#FFC805',
    'brand-accent-hover': '#FFD84D',
    'brand-gold-logo': '#FFD300',
    'brand-blue': '#4AA4EA',
    'brand-blue-soft': '#8FBEF0',
    'text-muted': '#5B6480',
    'text-subtle': '#8A91A8',
    'border': '#E4E8F3',
    'border-strong': '#C9D2E8',
    'surface': '#FFFFFF',
    'surface-1': '#F6F8FC',
    'surface-2': '#F2F5FB',
    'surface-3': '#EEF1F8',
    'success': '#2E7D46',
    'success-bg': '#F0F9EE',
    'warn-text': '#6B5407',
    'warn-bg': '#FFF9E6',
    'warn-border': '#F5E3A0',
  },
  gradient: {
    'grad-primary': 'linear-gradient(90deg, #283778 0%, #33438D 100%)',
    'grad-hero': 'linear-gradient(105deg, #12193a 0%, #161f48 40%, #1d2a5e 70%, #1d2a5e 100%)',
    'grad-urgent': 'linear-gradient(120deg, #1D2A5E 0%, #283778 55%, #33438D 100%)',
    'grad-cta': 'linear-gradient(135deg, #F6F8FC 0%, #EAF2FC 60%, #FFF6DC 130%)',
    'grad-gold': 'linear-gradient(150deg, #FFD300 0%, #F8A600 55%, #EB501E 100%)',
  },
  font: {
    'font-heading': "'Ubuntu', sans-serif",
    'font-body': "'Montserrat', system-ui, sans-serif",
  },
  radius: {
    'radius-sm': '10px',
    'radius-md': '12px',
    'radius-lg': '14px',
    'radius-xl': '18px',
    'radius-2xl': '20px',
    'radius-3xl': '24px',
    'radius-pill': '999px',
  },
  shadow: {
    'shadow-float': '0 16px 32px -10px rgba(40,55,120,0.25)',
    'shadow-card': '0 20px 40px -14px rgba(40,55,120,0.22)',
    'shadow-btn': '0 12px 24px -8px rgba(40,55,120,0.45)',
    'shadow-pop': '0 30px 60px -18px rgba(40,55,120,0.32)',
    'shadow-modal': '0 40px 80px -24px rgba(15,21,52,0.6)',
  },
  space: {
    'space-1': '4px',
    'space-2': '8px',
    'space-3': '12px',
    'space-4': '16px',
    'space-5': '20px',
    'space-6': '24px',
    'space-8': '32px',
    'space-10': '40px',
    'space-14': '56px',
    'space-18': '72px',
    'space-24': '96px',
  },
  layout: {
    'container': '1240px',
    'container-narrow': '880px',
  },
  motion: {
    'dur-fast': '0.15s',
    'dur-mid': '0.2s',
    'dur-slow': '0.25s',
    'ease': 'ease',
    'ease-in-out': 'ease-in-out',
  },
};

// ---- write JSON ----
mkdirSync('public', { recursive: true });
writeFileSync('public/design-tokens.json', JSON.stringify(TOKENS, null, 2));

// ---- write CSS :root ----
let css = '/* Rush In — design tokens (generated from scripts/gen-brand.mjs). Single source of truth. */\n:root {\n';
for (const group of Object.values(TOKENS)) {
  for (const [k, v] of Object.entries(group)) css += `  --${k}: ${v};\n`;
}
css += '}\n';
writeFileSync('public/design-tokens.css', css);
mkdirSync('app/styleguide', { recursive: true });
writeFileSync('app/styleguide/tokens.css', css);

// ---- logo variants ----
const logo = readFileSync('public/rushin-logo.svg', 'utf8'); // navy #173A77 text + gold #FFD300 icon
writeFileSync('public/rushin-logo-mono.svg', logo.replace(/#FFD300/gi, '#173A77'));           // all navy
writeFileSync('public/rushin-logo-mono-white.svg', logo.replace(/#173A77/gi, '#FFFFFF').replace(/#FFD300/gi, '#FFFFFF')); // all white

// ---- logo PNG exports ----
const sizes = [128, 256, 512, 1024, 2048];
mkdirSync('public/brand/logo', { recursive: true });
for (const w of sizes) {
  await sharp('public/rushin-logo.svg').resize({ width: w }).png().toFile(`public/brand/logo/rushin-logo-${w}.png`);
  await sharp('public/rushin-logo-white.svg').resize({ width: w }).png().toFile(`public/brand/logo/rushin-logo-white-${w}.png`);
}
// glyph (folded-paper mark) PNGs on transparent
for (const w of [128, 256, 512, 1024]) {
  await sharp('public/favicon.svg').resize({ width: w }).png().toFile(`public/brand/logo/rushin-glyph-${w}.png`);
}

console.log('brand tokens + logo assets generated');
