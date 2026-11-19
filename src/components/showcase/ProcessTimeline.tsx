'use client';
import { useState } from 'react';
import { STEPS } from './data';

export default function ProcessTimeline() {
  const [s, setS] = useState(0);
  const st = STEPS[s];
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); setS((s + 1) % STEPS.length); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); setS((s + STEPS.length - 1) % STEPS.length); }
  };
  return (
    <section id="process" className="sec" style={{ padding: '120px 0', background: 'linear-gradient(180deg,rgba(10,18,38,.55),rgba(5,7,13,0))' }}>
      <div className="wrap">
        <div className="mono eyebrow rv">06 — Our implementation process</div>
        <h2 className="disp rv" style={{ margin: '22px 0 0', maxWidth: 760, fontWeight: 600, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.06, letterSpacing: '-.025em', color: '#fff', textWrap: 'balance' }}>From first conversation to a system that keeps improving.</h2>
        <div className="rv" style={{ marginTop: 64, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 22, right: 22, top: 21, height: 2, background: 'rgba(124,160,255,.2)', borderRadius: 2 }} aria-hidden="true" />
          <div style={{ position: 'absolute', left: 22, top: 21, height: 2, borderRadius: 2, background: 'linear-gradient(90deg,#4D7CFF,#3DDCFF)', boxShadow: '0 0 14px rgba(61,220,255,.7)', transition: 'width .6s cubic-bezier(.2,.8,.2,1)', maxWidth: 'calc(100% - 44px)', width: `${(s / (STEPS.length - 1)) * 100}%` }} aria-hidden="true" />
          <div role="tablist" aria-label="Implementation steps" onKeyDown={onKey} style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: '28px 16px' }}>
            {STEPS.map((x, i) => (
              <button key={x.name} role="tab" id={`step-tab-${i}`} aria-controls="step-panel" tabIndex={i === s ? 0 : -1} aria-selected={i === s} className={`step ${i === s ? 'on' : i < s ? 'done' : ''}`} onClick={() => setS(i)}>
                <span className="dot">0{i + 1}</span>
                <span className="disp" style={{ display: 'block', marginTop: 18, fontSize: 22, fontWeight: 600 }}>{x.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${s}`} className="glass spot rv" style={{ marginTop: 44, padding: 36, display: 'flex', flexWrap: 'wrap', gap: 36 }} aria-live="polite">
          <div style={{ flex: '1 1 300px' }}>
            <div className="mono" style={{ fontSize: 11, color: '#3DDCFF' }}>Step 0{s + 1}</div>
            <h3 className="disp" style={{ margin: '14px 0 0', fontSize: 'clamp(26px,3vw,36px)', fontWeight: 600, color: '#fff', letterSpacing: '-.02em' }}>{st.name}</h3>
            <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.65, color: '#A9B5CE' }}>{st.text}</p>
          </div>
          <ul style={{ flex: '1 1 360px', margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {st.items.map((t) => (
              <li key={s + t} className="swap" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.55, color: '#D5DDF0', padding: '16px 18px', borderRadius: 14, border: '1px solid rgba(124,160,255,.14)', background: 'rgba(5,7,13,.45)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3DDCFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: 'none', marginTop: 2 }}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
