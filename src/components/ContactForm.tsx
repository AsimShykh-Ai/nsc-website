'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const form = e.currentTarget;
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    try {
      const r = await fetch('/__forms.html', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body });
      if (r.ok) { setState('ok'); form.reset(); } else { setState('err'); setMsg('Something went wrong. Please email us instead.'); }
    } catch { setState('err'); setMsg('Network error. Please try again.'); }
  }
  if (state === 'ok') return <div className="glass" role="status" style={{ padding: 32 }}><h2 className="disp" style={{ margin: 0 }}>Thank you.</h2><p style={{ color: '#B4BFD6' }}>We received your request and will reply by email within one business day.</p></div>;
  return (
    <form onSubmit={onSubmit} className="glass" style={{ padding: 32, display: 'grid', gap: 18 }} aria-label="Consultation request" name="contact" method="POST">
      <input type="hidden" name="form-name" value="contact" />
      <div><label className="lbl" htmlFor="name">Name</label><input className="field" id="name" name="name" required maxLength={120} autoComplete="name" /></div>
      <div><label className="lbl" htmlFor="email">Work email</label><input className="field" id="email" name="email" type="email" required maxLength={200} autoComplete="email" /></div>
      <div><label className="lbl" htmlFor="company">Company</label><input className="field" id="company" name="company" maxLength={160} autoComplete="organization" /></div>
      <div><label className="lbl" htmlFor="interest">What are you interested in?</label>
        <select className="field" id="interest" name="interest" defaultValue="">
          <option value="">Not sure yet</option><option>AI Business Automation</option><option>AI Social Media Automation</option><option>Chatbots and Agents</option><option>Business Dashboards</option><option>AI and Machine Learning</option><option>IoT and Smart Technology</option>
        </select></div>
      <div><label className="lbl" htmlFor="message">Tell us about your business</label><textarea className="field" id="message" name="message" rows={5} maxLength={4000} /></div>
      <input name="bot-field" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999 }} />
      {state === 'err' && <p role="alert" style={{ color: '#FF8A8A', margin: 0 }}>{msg}</p>}
      <button className="btn btn-p" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Request Free Consultation'}</button>
    </form>
  );
}
