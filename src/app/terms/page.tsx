import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Terms and Conditions | Neural Shades Creations', description: 'The terms that apply when you use the Neural Shades Creations website, and how our services are agreed in writing.', robots: { index: true }, alternates: { canonical: '/terms' } };
export default function Terms() {
  return (<article className="wrap" style={{ maxWidth: 760, padding: '90px 32px' }}>
    <h1 className="disp" style={{ fontSize: 48 }}>Terms and Conditions</h1>
    <div className="prose-nsc" style={{ color: '#C9D3E8', lineHeight: 1.8 }}>
      <h2>Use of this website</h2><p>The content is provided for general information about our services and does not create a client relationship.</p>
      <h2>Services</h2><p>Any services we provide are agreed in a separate written proposal that sets out the scope, timeline and cost before work begins. Nothing on this website is a binding offer.</p>
      <h2>Liability and governing law</h2><p>To the fullest extent permitted by law, Neural Shades Creations is not liable for indirect or consequential loss arising from your use of this website, and the information is provided as is without warranties. Terms covering liability and governing law for any project are set out in the written proposal or agreement for that project.</p>
    </div></article>);
}
