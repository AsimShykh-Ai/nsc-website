import { JsonLd } from '@/components/JsonLd';
import { orgLd } from '@/lib/jsonld';
import { getSetting } from '@/lib/db';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const sameAs = ['social_linkedin', 'social_x', 'social_youtube'].map((k) => getSetting(k)).filter(Boolean);
  return (
    <>
      <JsonLd data={orgLd(getSetting('contact_email'), sameAs)} />
      <div className="nsc" style={{ minHeight: '100vh' }}>
        <div className="aura" aria-hidden="true" /><div className="blob b1" aria-hidden="true" /><div className="blob b2" aria-hidden="true" /><div className="blob b3" aria-hidden="true" />
        <a href="#main" style={{ position: 'absolute', left: -9999 }}>Skip to content</a>
        <Effects />
        <Header />
        <main id="main" style={{ position: 'relative', zIndex: 1 }}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
