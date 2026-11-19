'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV } from '@/lib/site';
import { LogoMark } from './Logo';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (h: string) => (h === '/' ? path === '/' : path === h || path.startsWith(h + '/'));
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(5,7,13,.72)', backdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(124,160,255,.12)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, height: 76 }}>
        <Link className="logo" href="/" aria-label="Neural Shades Creations, home" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <LogoMark />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span className="disp" style={{ fontWeight: 700, fontSize: 17, letterSpacing: '.14em', color: '#7AA2FF' }}>NEURAL <span style={{ color: '#B79CFF' }}>SHADES</span></span>
            <span className="mono" style={{ fontSize: 10, color: '#E8ECF6', letterSpacing: '.34em' }}>CREATIONS</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          {NAV.map((n) => (
            <Link key={n.href} className="navlink" href={n.href} aria-current={active(n.href) ? 'page' : undefined}
              style={active(n.href) ? { color: '#fff', textShadow: '0 0 18px rgba(61,220,255,.7)' } : undefined}>{n.label}</Link>
          ))}
        </nav>
        <Link className="btn btn-p nav-cta" href="/contact">Book a Free Consultation</Link>
        <button className="menu-btn btn btn-g" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} style={{ padding: 0, width: 48 }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingBottom: 24 }}>
          {NAV.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="navlink" style={{ padding: '12px 0', fontSize: 18 }}>{n.label}</Link>)}
          <Link className="btn btn-p" href="/contact" onClick={() => setOpen(false)} style={{ marginTop: 10 }}>Book a Free Consultation</Link>
        </nav>
      )}
    </header>
  );
}
