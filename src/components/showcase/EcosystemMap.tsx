'use client';
import { useState } from 'react';
import { ECO } from './data';

const P: [number, number][] = [[50, 14], [81.2, 32], [81.2, 68], [50, 86], [18.8, 68], [18.8, 32]];
const LABEL = ['Automation', 'Social Intelligence', 'AI Agents', 'Dashboards', 'Machine Learning', 'IoT Infrastructure'];
const f = (n: number) => String(n);

export default function EcosystemMap() {
  const [n, setN] = useState(0);
  const e = ECO[n];
  return (
    <section id="ecosystem" className="sec" style={{ padding: '120px 0' }}>
      <div className="wrap">
        <div style={{ maxWidth: 820 }}>
          <div className="mono eyebrow rv">03 — The intelligent business ecosystem</div>
          <h2 className="disp rv" style={{ margin: '22px 0 0', fontWeight: 600, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.06, letterSpacing: '-.025em', color: '#fff', textWrap: 'balance' }}>We don&apos;t sell tools. We connect them into one <span className="grad">living system.</span></h2>
          <p className="rv" style={{ margin: '20px 0 0', maxWidth: 660, fontSize: 18, lineHeight: 1.65, color: '#A9B5CE' }}>Select any node to see how it exchanges signals with the rest of the ecosystem.</p>
        </div>
        <div style={{ marginTop: 56, display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center' }}>
          <div className="rv" style={{ flex: '1 1 520px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 640, aspectRatio: '1 / 1' }}>
              <svg viewBox="0 0 100 100" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
                <defs><radialGradient id="ecoCore" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#3DDCFF" stopOpacity=".55" /><stop offset="1" stopColor="#4D7CFF" stopOpacity="0" /></radialGradient></defs>
                <circle cx="50" cy="50" r="30" fill="url(#ecoCore)" className="pulse" />
                {[0, 1.5, 3].map((d) => <circle key={d} className="eripple" cx="50" cy="50" r="12" style={{ animationDelay: `${d}s` }} />)}
                <g className="spin-a" style={{ animationDuration: '90s' }}><circle cx="50" cy="50" r="46" fill="none" stroke="rgba(124,160,255,.2)" strokeWidth=".3" strokeDasharray=".6 2" /></g>
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(124,160,255,.08)" strokeWidth=".3" />
                {P.map((p, i) => { const q = P[(i + 1) % 6]; return <path key={`r${i}`} className={`link ring ${(i === n || (i + 1) % 6 === n) ? 'on' : ''}`} d={`M${f(p[0])} ${f(p[1])}L${f(q[0])} ${f(q[1])}`} />; })}
                {P.map((p, i) => <path key={`l${i}`} className={`link ${i === n ? 'on' : ''}`} d={`M50 50L${f(p[0])} ${f(p[1])}`} />)}
                {P.map((p, i) => (
                  <g key={`pt${i}`}>
                    <circle className={`pt ${i === n ? 'on' : ''}`} r="1.1" fill="#CFF8FF"><animateMotion dur="1.4s" repeatCount="indefinite" path={`M50 50L${f(p[0])} ${f(p[1])}`} /></circle>
                    <circle className={`pt ${i === n ? 'on' : ''}`} r="1.1" fill="#B79CFF"><animateMotion dur="1.4s" begin="-0.7s" repeatCount="indefinite" path={`M${f(p[0])} ${f(p[1])}L50 50`} /></circle>
                  </g>
                ))}
              </svg>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '22%', aspectRatio: '1 / 1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'radial-gradient(circle,rgba(61,220,255,.35),rgba(77,124,255,.12) 70%)', border: '1px solid rgba(61,220,255,.55)', boxShadow: '0 0 60px rgba(61,220,255,.35)' }}>
                <span className="mono" style={{ fontSize: 'clamp(8px,1.2vw,11px)', color: '#fff', lineHeight: 1.4 }}>Neural<br />core</span>
              </div>
              {P.map((p, i) => (
                <button key={i} className={`eco-node ${i === n ? 'on' : ''}`} style={{ left: `${p[0]}%`, top: `${p[1]}%`, animationDelay: `-${i}s` }} aria-pressed={i === n} onClick={() => setN(i)}>{LABEL[i]}</button>
              ))}
            </div>
          </div>
          <div className="glass spot rv" style={{ flex: '1 1 360px', minWidth: 0, padding: 36 }} aria-live="polite">
            <div className="mono" style={{ fontSize: 11, color: '#3DDCFF' }}>Active node</div>
            <h3 className="disp" style={{ margin: '14px 0 0', fontSize: 'clamp(26px,3vw,34px)', fontWeight: 600, color: '#fff', letterSpacing: '-.02em' }}>{e.name}</h3>
            <p style={{ margin: '16px 0 0', fontSize: 17, lineHeight: 1.65, color: '#A9B5CE' }}>{e.text}</p>
            <div className="mono" style={{ marginTop: 32, fontSize: 11, color: '#7F8FB0' }}>Exchanges signals with</div>
            <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {e.talks.map((t) => <span key={t + n} className="swap" style={{ padding: '9px 16px', borderRadius: 999, fontSize: 13, color: '#D5DDF0', border: '1px solid rgba(61,220,255,.4)', background: 'rgba(61,220,255,.07)' }}>{t}</span>)}
            </div>
            <p style={{ margin: '32px 0 0', paddingTop: 24, borderTop: '1px solid rgba(124,160,255,.14)', fontSize: 15, lineHeight: 1.6, color: '#9AA6BF' }}>{e.example}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
