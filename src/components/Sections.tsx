import Link from 'next/link';
import type { Section } from '@/lib/db';
import { linkParts, type LinkCtx } from '@/lib/interlink';

export function Linked({ text, ctx }: { text: string; ctx?: LinkCtx }) {
  if (!ctx) return <>{text}</>;
  return <>{linkParts(text, ctx).map((p, i) => typeof p === 'string' ? p : <Link key={i} href={p.href} className="ilink">{p.text}</Link>)}</>;
}

const wrapS = { padding: '72px 0' } as const;
export function SectionView({ s, ctx }: { s: Section; ctx?: LinkCtx }) {
  return (
    <section className="sec" style={wrapS}>
      <div className="wrap">
        <h2 className="disp rv" style={{ fontSize: 'clamp(26px,3.4vw,40px)', margin: '0 0 22px', lineHeight: 1.15 }}>{s.h2}</h2>
        {s.type === 'definition' && <p className="rv" style={{ maxWidth: 820, fontSize: 18, lineHeight: 1.75, color: '#B4BFD6' }}><Linked text={s.text} ctx={ctx} /></p>}
        {s.type === 'bullets' && (
          <ul className="rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 14, padding: 0, listStyle: 'none' }}>
            {s.items.map((t) => <li key={t} className="glass why" style={{ padding: '18px 22px', color: '#C9D3E8' }}><Linked text={t} ctx={ctx} /></li>)}
          </ul>
        )}
        {s.type === 'cards' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 20 }}>
            {s.items.map((c) => {
              const inner = (<><h3 className="disp" style={{ margin: '0 0 10px', fontSize: 20 }}>{c.title}</h3><p style={{ margin: 0, color: '#9AA6BF', lineHeight: 1.65 }}>{c.href ? c.text : <Linked text={c.text} ctx={ctx} />}</p>{c.href && <span className="mono" style={{ display: 'inline-block', marginTop: 16, fontSize: 11, color: '#7FA6FF' }}>Explore →</span>}</>);
              return c.href
                ? <Link key={c.title} href={c.href} className="glass spot tilt rv" style={{ padding: 28, display: 'block' }}>{inner}</Link>
                : <div key={c.title} className="glass spot rv" style={{ padding: 28 }}>{inner}</div>;
            })}
          </div>
        )}
        {s.type === 'faq' && (
          <div style={{ display: 'grid', gap: 12, maxWidth: 860 }}>
            {s.items.map((f) => (
              <details key={f.q} className="glass rv" style={{ padding: '18px 24px' }}>
                <summary className="disp" style={{ cursor: 'pointer', fontSize: 18, fontWeight: 600 }}>{f.q}</summary>
                <p style={{ margin: '14px 0 0', color: '#B4BFD6', lineHeight: 1.7 }}><Linked text={f.a} ctx={ctx} /></p>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, h1, lead, home, ctx }: { eyebrow?: string; h1: string; lead: string; home?: boolean; ctx?: LinkCtx }) {
  return (
    <section style={{ padding: home ? '120px 0 80px' : '90px 0 40px' }}>
      <div className="wrap">
        {eyebrow && <div className="eyebrow mono" style={{ marginBottom: 20 }}>{eyebrow}</div>}
        <h1 className="disp in" style={{ fontSize: home ? 'clamp(40px,7vw,84px)' : 'clamp(34px,5vw,60px)', lineHeight: 1.05, margin: 0, maxWidth: 980 }}>
          <span className="grad">{h1}</span>
        </h1>
        <p className="in" style={{ marginTop: 24, maxWidth: 720, fontSize: 19, lineHeight: 1.7, color: '#B4BFD6' }}><Linked text={lead} ctx={ctx} /></p>
        {home && (
          <div className="in" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 36 }}>
            <Link className="btn btn-p" href="/solutions">Explore Our Solutions</Link>
            <Link className="btn btn-g" href="/contact">Book a Free Consultation</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="sec" style={{ padding: '90px 0' }}>
      <div className="wrap glass" style={{ padding: '56px 40px', textAlign: 'center' }}>
        <h2 className="disp" style={{ fontSize: 'clamp(26px,3.6vw,44px)', margin: 0 }}>Your Business Deserves More Than Traditional Technology.</h2>
        <p style={{ color: '#B4BFD6', margin: '18px auto 30px', maxWidth: 560 }}>Let&apos;s engineer a smarter, faster, and more intelligent future for your business.</p>
        <Link className="btn btn-p" href="/contact">Schedule Your Free AI Consultation</Link>
      </div>
    </section>
  );
}

export function RelatedLinks({ items }: { items: { href: string; label: string; blurb?: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="sec" style={{ padding: '56px 0' }} aria-labelledby="keep-exploring">
      <div className="wrap">
        <h2 id="keep-exploring" className="disp" style={{ fontSize: 26, margin: '0 0 20px' }}>Keep exploring</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
          {items.map((r) => <Link key={r.href} href={r.href} className="glass spot why" style={{ padding: '18px 22px', display: 'block' }}><strong className="disp">{r.label}</strong>{r.blurb && <div style={{ color: '#9AA6BF', fontSize: 14, marginTop: 6 }}>{r.blurb}</div>}</Link>)}
        </div>
      </div>
    </section>
  );
}
