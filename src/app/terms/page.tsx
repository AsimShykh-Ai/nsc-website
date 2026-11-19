import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms and Conditions | Neural Shades Creations', robots: { index: true }, alternates: { canonical: '/terms' } };
export default function Terms() {
  return (<article className="wrap" style={{ maxWidth: 760, padding: '90px 32px' }}>
    <h1 className="disp" style={{ fontSize: 48 }}>Terms and Conditions</h1>
    <p style={{ color: '#E0B25A' }}>[PLACEHOLDER: this is a template outline, not legal advice. Have a qualified professional review and complete it before launch.]</p>
    <div className="prose-nsc" style={{ color: '#C9D3E8', lineHeight: 1.8 }}>
      <h2>Use of this website</h2><p>The content is provided for general information about our services and does not create a client relationship.</p>
      <h2>Services</h2><p>[PLACEHOLDER: engagement terms are agreed in a separate written proposal.]</p>
      <h2>Liability and governing law</h2><p>[PLACEHOLDER: limitation of liability and governing law.]</p>
    </div></article>);
}
