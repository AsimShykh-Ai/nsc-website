import { WHYS } from './data';
export default function Why() {
  return (
    <section id="why" className="sec" style={{ padding: '120px 0' }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
          <div className="rv" style={{ flex: '1 1 360px', maxWidth: 460 }}>
            <div className="mono eyebrow">05 — Why Neural Shades Creations</div>
            <h2 className="disp" style={{ margin: '22px 0 0', fontWeight: 600, fontSize: 'clamp(34px,4.2vw,54px)', lineHeight: 1.08, letterSpacing: '-.025em', color: '#fff', textWrap: 'balance' }}>Practical intelligence, engineered around your business.</h2>
            <p style={{ margin: '22px 0 0', fontSize: 17, lineHeight: 1.7, color: '#A9B5CE' }}>We measure our work by the hours it gives back and the customers it helps you keep, not by how impressive the technology sounds. Every engagement starts with your operations, not our toolbox.</p>
          </div>
          <div style={{ flex: '2 1 560px', minWidth: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))', gap: 16 }}>
            {WHYS.map(([h, t], i) => (
              <div key={h} className="why spot tilt rv">
                <div className="mono wn" style={{ fontSize: 11, color: '#3DDCFF' }}>0{i + 1}</div>
                <h3 className="disp" style={{ margin: '14px 0 8px', fontSize: 20, fontWeight: 600, color: '#fff' }}>{h}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: '#9AA6BF' }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
