'use client';
import { useEffect } from 'react';

/** One delegated mouse listener powers: cursor aura, spotlight borders, card tilt and hero parallax on every page. */
export default function Effects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.querySelector<HTMLElement>('.nsc');
    let raf = 0, lastTilt: HTMLElement | null = null, lastHero: HTMLElement | null = null;
    const clearTilt = (el: HTMLElement | null) => { if (el) { el.style.removeProperty('--rx'); el.style.removeProperty('--ry'); el.style.removeProperty('--ty'); } };
    const clearHero = (el: HTMLElement | null) => { if (el) { el.style.setProperty('--hx', '0'); el.style.setProperty('--hy', '0'); } };

    const onMove = (e: MouseEvent) => {
      const target = e.target as Element | null, cx = e.clientX, cy = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (root) { const r = root.getBoundingClientRect(); root.style.setProperty('--gx', cx - r.left + 'px'); root.style.setProperty('--gy', cy - r.top + 'px'); }
        const spot = target?.closest?.('.spot') as HTMLElement | null;
        if (spot) {
          const r = spot.getBoundingClientRect(), x = cx - r.left, y = cy - r.top;
          spot.style.setProperty('--mx', x + 'px'); spot.style.setProperty('--my', y + 'px');
          if (spot.classList.contains('tilt')) {
            spot.style.setProperty('--ry', ((x / r.width) - 0.5) * 10 + 'deg');
            spot.style.setProperty('--rx', (0.5 - (y / r.height)) * 10 + 'deg');
            spot.style.setProperty('--ty', '-5px');
          }
        }
        if (lastTilt && lastTilt !== spot) clearTilt(lastTilt);
        lastTilt = spot && spot.classList.contains('tilt') ? spot : null;

        const hero = target?.closest?.('.hero') as HTMLElement | null;
        if (hero) {
          const r = hero.getBoundingClientRect(), x = cx - r.left, y = cy - r.top;
          hero.style.setProperty('--hx', (((x / r.width) - 0.5) * 2).toFixed(3));
          hero.style.setProperty('--hy', (((y / r.height) - 0.5) * 2).toFixed(3));
          hero.style.setProperty('--sx', x + 'px'); hero.style.setProperty('--sy', y + 'px');
        }
        if (lastHero && lastHero !== hero) clearHero(lastHero);
        lastHero = hero;
      });
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);
  return null;
}
