'use client';
import { useState } from 'react';
import { IND } from './data';

export default function IndustriesExplorer() {
  const [i, setI] = useState(0);
  const d = IND[i];
  return (
    <section id="industries" className="sec" style={{ padding: '120px 0', background: 'linear-gradient(180deg,rgba(10,18,38,.5),rgba(5,7,13,0))' }}>
      <div className="wrap">
        <div className="mono eyebrow rv">04 — Industries we transform</div>
        <h2 className="disp rv" style={{ margin: '22px 0 0', maxWidth: 860, fontWeight: 600, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.06, letterSpacing: '-.025em', color: '#fff', textWrap: 'balance' }}>Built for the way American small businesses actually operate.</h2>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))', gap: 16 }}>
          {IND.map((x, k) => (
            <button key={x.name} className={`ind spot tilt rv ${k === i ? 'on' : ''}`} aria-pressed={k === i} onClick={() => setI(k)}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#3DDCFF' }}><path d={x.icon} /></svg>
              <span className="disp" style={{ fontSize: 19, fontWeight: 500 }}>{x.name}</span>
            </button>
          ))}
        </div>
        <div className="glass spot rv" style={{ marginTop: 20, padding: 36, display: 'flex', flexWrap: 'wrap', gap: 36, alignItems: 'flex-start' }} aria-live="polite">
          <div style={{ flex: '1 1 280px' }}>
            <div className="mono" style={{ fontSize: 11, color: '#3DDCFF' }}>Selected industry</div>
            <h3 className="disp" style={{ margin: '14px 0 0', fontSize: 'clamp(26px,3vw,34px)', fontWeight: 600, color: '#fff', letterSpacing: '-.02em' }}>{d.name}</h3>
            <p style={{ margin: '14px 0 0', fontSize: 16, lineHeight: 1.65, color: '#A9B5CE' }}>{d.lead}</p>
          </div>
          <ul style={{ flex: '2 1 420px', margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: 16 }}>
            {d.apps.map(([tag, t]) => (
              <li key={d.name + tag} className="swap" style={{ padding: 22, borderRadius: 16, border: '1px solid rgba(124,160,255,.16)', background: 'rgba(5,7,13,.5)' }}>
                <div className="mono" style={{ fontSize: 11, color: '#7AA2FF' }}>{tag}</div>
                <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.6, color: '#D5DDF0' }}>{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
