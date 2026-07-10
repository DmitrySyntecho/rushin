'use client';

import React, { useEffect, useRef } from 'react';

/**
 * Full-bleed hero background video.
 * Sets `muted` on the DOM node and calls play() in an effect — React doesn't
 * reliably reflect the `muted` attribute, which otherwise makes browsers block
 * autoplay and leave only the poster showing.
 */
export default function HeroBgVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    // Retry once metadata/data is ready, in case the first attempt was too early.
    v.addEventListener('loadeddata', tryPlay, { once: true });
    return () => v.removeEventListener('loadeddata', tryPlay);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/hero-bg.webp"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    >
      <source src="/videos/hero-office2.mp4" type="video/mp4" />
    </video>
  );
}
