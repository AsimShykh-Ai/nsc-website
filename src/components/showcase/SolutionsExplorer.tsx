'use client';
import { useState } from 'react';
import Link from 'next/link';
import { SOL, SOL_HREFS, HTML } from './data';

const arrow = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>;

export default function SolutionsExplorer() {
  const [i, setI] = useState(0);
  const a = SOL[i];
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); setI((i + 1) % SOL.length); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); setI((i + SOL.length - 1) % SOL.length); }
  };
  return (
    <section id="solutions" className="sec" style={{ padding: '120px 0', background: 'linear-gradient(180deg,rgba(10,18,38,.55),rgba(5,7,13,0))' }}>
      <div className="wrap">
        <div className="mono eyebrow rv">02 — Solutions</div>
        <h2 className="disp rv" style={{ margin: '22px 0 0', maxWidth: 820, fontWeight: 600, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.06, letterSpacing: '-.025em', color: '#fff', textWrap: 'balance' }}>Six disciplines. One intelligent business.</h2>
        <p className="rv" style={{ margin: '20px 0 0', maxWidth: 640, fontSize: 18, lineHeight: 1.65, color: '#A9B5CE' }}>Choose a discipline to explore what we build inside it.</p>
        <div style={{ marginTop: 56, display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'stretch' }}>
          <div role="tablist" aria-label="Solution categories" aria-orientation="vertical" onKeyDown={onKey} style={{ flex: '1 1 340px', maxWidth: 460, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SOL.map((s, k) => (
              <button key={s.name} role="tab" id={`sol-tab-${k}`} aria-controls="sol-panel" tabIndex={k === i ? 0 : -1} className={`sol-row spot rv ${k === i ? 'on' : ''}`} aria-selected={k === i} onClick={() => setI(k)}>
                <span className="num">0{k + 1}</span>
                <span className="disp" style={{ fontSize: 18, fontWeight: 500, flex: 1 }}>{s.name}</span>{arrow}
              </button>
            ))}
          </div>
          <div id="sol-panel" role="tabpanel" aria-labelledby={`sol-tab-${i}`} className="glass spot rv" style={{ flex: '2 1 520px', minWidth: 0, padding: 36, display: 'flex', flexDirection: 'column', gap: 28, color: a.color }}>
            <div style={{ height: 280, borderRadius: 14, background: 'radial-gradient(400px 220px at 50% 50%,rgba(255,255,255,.06),transparent 70%),rgba(5,7,13,.5)', border: '1px solid rgba(124,160,255,.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <div key={i} className="swap" style={{ width: '100%', height: '100%' }} dangerouslySetInnerHTML={{ __html: HTML.solSvgs[i] }} />
            </div>
            <div>
              <h3 className="disp" style={{ margin: 0, fontSize: 'clamp(26px,3vw,36px)', fontWeight: 600, color: '#fff', letterSpacing: '-.02em' }}>{a.name}</h3>
              <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.65, color: '#A9B5CE', maxWidth: 640 }}>{a.desc}</p>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap: '12px 28px' }}>
              {a.caps.map((c) => (
                <li key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: '#D5DDF0' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none', marginTop: 2 }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg><span>{c}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <Link className="btn btn-p" href={SOL_HREFS[i]}>Explore {a.short}</Link>
              <Link className="btn btn-g" href="/contact" style={{ color: '#fff' }}>Discuss {a.short}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
