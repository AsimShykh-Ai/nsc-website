import Link from 'next/link';
import { SERVICES, NAV } from '@/lib/site';
import { getSetting } from '@/lib/db';

export default function Footer() {
  const email = getSetting('contact_email'), phone = getSetting('contact_phone');
  const socials: [string, string][] = [['Instagram', 'https://www.instagram.com/neural_shades_creations/'], ['TikTok', 'https://www.tiktok.com/@neuralshadescreations'], ['YouTube', 'https://www.youtube.com/channel/UCGqOnx0HcTWpBmEyfiXgBbw'], ['Facebook', 'https://www.facebook.com/profile.php?id=61583673880384']];
  const col = { flex: '1 1 150px', display: 'flex', flexDirection: 'column' as const, paddingLeft: 18 };
  const h = { fontSize: 11, color: '#7F8FB0', marginBottom: 12 };
  return (
    <footer className="foot" style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(124,160,255,.14)', background: '#04060B', padding: '80px 0 40px' }}>
      <div className="wrap">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 40px' }}>
          <div style={{ flex: '2 1 300px', maxWidth: 380 }}>
            <div className="disp" style={{ fontWeight: 700, fontSize: 18, letterSpacing: '.14em', color: '#7AA2FF' }}>NEURAL <span style={{ color: '#B79CFF' }}>SHADES</span></div>
            <div className="mono" style={{ fontSize: 10, color: '#E8ECF6', letterSpacing: '.34em', marginTop: 4 }}>CREATIONS</div>
            <p style={{ margin: '22px 0 0', fontSize: 14, lineHeight: 1.7, color: '#9AA6BF' }}>An AI consultancy helping small and medium-sized businesses across the United States adopt intelligent automation, agents, analytics and connected technology.</p>
          </div>
          <div style={col}><div className="mono" style={h}>Services</div>{SERVICES.map((s) => <Link key={s.href} className="fl" href={s.href}>{s.label}</Link>)}</div>
          <div style={col}><div className="mono" style={h}>Company</div>{NAV.map((n) => <Link key={n.href} className="fl" href={n.href}>{n.label}</Link>)}</div>
          <div style={col}><div className="mono" style={h}>Contact</div>
            <span style={{ fontSize: 14, color: '#9AA6BF', lineHeight: 1.9 }}>{email}<br />{phone}<br />United States</span>
            {socials.length > 0 && <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>{socials.map(([n, u]) => <a key={n} className="soc" href={u} rel="noopener noreferrer me" target="_blank" style={{ padding: '6px 12px', fontSize: 13 }}>{n}</a>)}</div>}
          </div>
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(124,160,255,.1)', display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', fontSize: 13, color: '#7F8FB0' }}>
          <span>© {new Date().getFullYear()} Neural Shades Creations. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 20 }}><Link className="legal" href="/privacy">Privacy Policy</Link><Link className="legal" href="/terms">Terms and Conditions</Link></span>
        </div>
      </div>
    </footer>
  );
}
