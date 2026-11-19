export default function Intro() {
  const cards = [
    ['A — Eliminate', '#3DDCFF', 'Repetitive work', 'Hand follow-ups, admin and data entry to automations that never forget and never tire.'],
    ['B — Improve', '#7AA2FF', 'Operational efficiency', 'See what is happening across the business in one place, and act on it while it matters.'],
    ['C — Embrace', '#B79CFF', 'Intelligent technology', 'Adopt AI as a system, not a collection of tools, with a partner who builds and maintains it.'],
  ];
  return (
    <section id="intro" className="sec" style={{ padding: '130px 0 140px', overflow: 'hidden' }}>
      <div className="ghost disp" aria-hidden="true">INTELLIGENT INTELLIGENT</div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="mono eyebrow rv">01 — The thesis</div>
        <h2 className="disp rv" style={{ margin: '26px 0 0', maxWidth: 980, fontWeight: 600, fontSize: 'clamp(38px,5.6vw,80px)', lineHeight: 1.04, letterSpacing: '-.03em', color: '#fff', textWrap: 'balance' }}>The Future of Business Is <span className="grad">Intelligent.</span></h2>
        <div style={{ marginTop: 64, display: 'flex', flexWrap: 'wrap', gap: 56 }}>
          <p className="rv" style={{ flex: '1 1 380px', margin: 0, fontSize: 20, lineHeight: 1.7, color: '#A9B5CE' }}>Most small businesses lose hours every week to work a system should be doing: chasing leads, answering the same questions, updating spreadsheets, posting content, building reports. Neural Shades Creations replaces that friction with connected, intelligent systems tailored to how your business actually runs.</p>
          <div style={{ flex: '1 1 520px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: 20 }}>
            {cards.map(([k, c, h, t]) => (
              <div key={k} className="glass spot tilt rv" style={{ padding: 28 }}>
                <div className="mono" style={{ fontSize: 11, color: c }}>{k}</div>
                <h3 className="disp" style={{ margin: '16px 0 10px', fontSize: 22, fontWeight: 600, color: '#fff' }}>{h}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#9AA6BF' }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
