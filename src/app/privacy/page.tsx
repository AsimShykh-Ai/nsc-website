import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy | Neural Shades Creations', robots: { index: true }, alternates: { canonical: '/privacy' } };
export default function Privacy() {
  return (<article className="wrap" style={{ maxWidth: 760, padding: '90px 32px' }}>
    <h1 className="disp" style={{ fontSize: 48 }}>Privacy Policy</h1>
    <p style={{ color: '#E0B25A' }}>[PLACEHOLDER: this is a template outline, not legal advice. Have a qualified professional review and complete it before launch.]</p>
    <div className="prose-nsc" style={{ color: '#C9D3E8', lineHeight: 1.8 }}>
      <h2>What we collect</h2><p>Information you submit through our contact form (name, email, company, message) and basic technical data needed to operate the site.</p>
      <h2>How we use it</h2><p>To respond to your enquiry and to improve our services. We do not sell personal information.</p>
      <h2>Retention and your rights</h2><p>[PLACEHOLDER: retention period, how to request access or deletion, applicable US state rights.]</p>
      <h2>Contact</h2><p>[PLACEHOLDER: business email]</p>
    </div></article>);
}
