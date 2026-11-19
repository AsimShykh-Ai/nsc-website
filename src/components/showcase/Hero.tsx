import Link from 'next/link';
import { HTML } from './data';

const ROT = ['lead follow-ups', 'social media', 'customer questions', 'reporting', 'daily operations'];

function stars() {
  let seed = 7; const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  return Array.from({ length: 46 }, (_, i) => ({
    x: (rnd() * 100).toFixed(1), y: (rnd() * 100).toFixed(1), s: (1 + rnd() * 2.4).toFixed(1),
    d: (rnd() * 6).toFixed(1), u: (3 + rnd() * 5).toFixed(1), cls: i % 4 === 0 ? 'mote' : '',
  }));
}

export default function Hero({ h1, lead }: { h1: string; lead: string }) {
  const words = h1.split(' ');
  const delays = [0.25, 0.45, 0.7, 0.9, 1.0, 1.1];
  return (
    <section className="hero">
      <div className="horizon" aria-hidden="true" /><div className="floor" aria-hidden="true" /><div className="spotlight" aria-hidden="true" /><div className="scan" aria-hidden="true" />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {stars().map((p, i) => <span key={i} className={`star ${p.cls}`} style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.s}px`, height: `${p.s}px`, animationDelay: `${p.d}s`, animationDuration: `${p.u}s` }} />)}
      </div>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px 20px', position: 'relative', zIndex: 1 }}>
        <div style={{ flex: '1 1 520px', minWidth: 0 }}>
          <div className="mono chip in" style={{ animationDelay: '.1s', display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px', borderRadius: 999, border: '1px solid rgba(124,160,255,.3)', background: 'rgba(77,124,255,.08)' }}>
            <span className="dotp" style={{ width: 7, height: 7, borderRadius: '50%', background: '#3DDCFF', boxShadow: '0 0 12px #3DDCFF', animation: 'blink 1.6s ease-in-out infinite' }} />AI consultancy for American small business
          </div>
          <h1 className="disp" style={{ margin: '28px 0 0', fontWeight: 600, fontSize: 'clamp(40px,5.4vw,80px)', lineHeight: 1.02, letterSpacing: '-.03em', color: '#fff' }}>
            {words.map((w, i) => (
              <span key={i}>
                <span className={`w${i === 1 ? ' grad' : ''}`} style={{ animationDelay: `${delays[i] ?? 1.1}s` }}>{w}</span>{' '}
                {i === 1 && words.length > 2 && <br />}
              </span>
            ))}
          </h1>
          <div className="in disp" style={{ animationDelay: '1.2s', marginTop: 28, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 12px', fontSize: 'clamp(17px,1.9vw,22px)' }}>
            <span style={{ color: '#9AA6BF' }}>Intelligent systems for your</span>
            <span className="rot" aria-label={ROT.join(', ')}><span className="rot-in" aria-hidden="true">{[...ROT, ROT[0]].map((t, i) => <span key={i}>{t}</span>)}</span></span>
          </div>
          <p className="in" style={{ animationDelay: '1.4s', margin: '22px 0 0', maxWidth: 560, fontSize: 19, lineHeight: 1.65, color: '#A9B5CE', textWrap: 'pretty' }}>{lead}</p>
          <div className="in" style={{ animationDelay: '1.6s', marginTop: 38, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <Link className="btn btn-p ringpulse" href="/solutions">Explore Our Solutions
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></Link>
            <Link className="btn btn-g" href="/contact">Book a Free Consultation</Link>
          </div>
        </div>
        {/* Static decorative artwork from the approved design (trusted, no user input) */}
        <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: HTML.hero }} />
      </div>
      <a className="cue mono" href="#intro" aria-label="Scroll to explore"><span className="m" />Scroll</a>
    </section>
  );
}

export function Marquee() {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: HTML.marquee }} />;
}
