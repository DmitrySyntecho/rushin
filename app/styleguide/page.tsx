import type { Metadata } from 'next';
import './tokens.css';
import './sg.css';
import StyleGuide from './StyleGuide';

export const metadata: Metadata = {
  title: 'Brand & UI Style Guide — Rush In Documentation Center',
  description: 'The Rush In brand system: logo, colors, typography, components, tokens and downloadable assets.',
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  return <StyleGuide />;
}
