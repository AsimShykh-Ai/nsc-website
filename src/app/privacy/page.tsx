import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Privacy Policy | Neural Shades Creations', robots: { index: true }, alternates: { canonical: '/privacy' } };
export default function Privacy() {
  return (<article className="wrap" style={{ maxWidth: 760, padding: '90px 32px' }}>
    <h1 className="disp" style={{ fontSize: 48 }}>Privacy Policy</h1>
    <div className="prose-nsc" style={{ color: '#C9D3E8', lineHeight: 1.8 }}>
      <h2>What we collect</h2><p>Information you submit through our contact form (name, email, company, message) and basic technical data needed to operate the site. We also use Google Analytics to understand how visitors use the site, which may place cookies on your device.</p>
      <h2>How we use it</h2><p>To respond to your enquiry and to improve our services. We do not sell personal information.</p>
      <h2>Retention and your rights</h2><p>We keep contact form messages only as long as we need them to respond to you and keep a record of our conversation. You can ask us at any time to see, correct or delete the personal information we hold about you by emailing neoaiverse95@gmail.com. If you live in a US state with a privacy law, you may have additional rights, and we will honour them on request.</p>
      <h2>Contact</h2><p>Neural Shades Creations, United States. Email: neoaiverse95@gmail.com. Phone: +92 330 0033416.</p>
    </div></article>);
}
