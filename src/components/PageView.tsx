import { JsonLd } from './JsonLd';
import { PageHero, SectionView, CtaBand, RelatedLinks } from './Sections';
import { makeCtx, RELATED } from '@/lib/interlink';
import { allPages } from '@/lib/db';
import { breadcrumbLd, faqLd, serviceLd, webPageLd } from '@/lib/jsonld';
import Link from 'next/link';
import { slugToPath } from '@/lib/site';
import type { PageRow, Section } from '@/lib/db';
import ContactForm from './ContactForm';
import Hero, { Marquee } from './showcase/Hero';
import Intro from './showcase/Intro';
import SolutionsExplorer from './showcase/SolutionsExplorer';
import EcosystemMap from './showcase/EcosystemMap';
import IndustriesExplorer from './showcase/IndustriesExplorer';
import Why from './showcase/Why';
import ProcessTimeline from './showcase/ProcessTimeline';

// Interactive showcase blocks inserted after the first (answer) section of each page.
const EXTRAS: Record<string, React.ReactNode> = {
  solutions: <><SolutionsExplorer /><EcosystemMap /></>,
  services: <ProcessTimeline />,
  industries: <IndustriesExplorer />,
  about: <Why />,
};

export default function PageView({ page, children }: { page: PageRow & { sections: Section[] }; children?: React.ReactNode }) {
  const path = slugToPath(page.slug);
  const crumbs = [{ name: 'Home', path: '/' }];
  if (page.slug.startsWith('services/')) crumbs.push({ name: 'Services', path: '/services' });
  if (page.slug !== 'home') crumbs.push({ name: page.service_name || page.h1.slice(0, 60), path });
  const ctx = makeCtx(path);
  const titles = new Map(allPages().filter((x) => x.published).map((x) => [x.slug, x.service_name || x.h1] as const));
  const label = (slug: string) => ({ services: 'All services', solutions: 'Solutions', industries: 'Industries', about: 'About us', contact: 'Book a free consultation' } as Record<string, string>)[slug] || titles.get(slug) || slug;
  const related = (RELATED[page.slug] || []).filter((x) => titles.has(x)).map((x) => ({ href: x === 'home' ? '/' : '/' + x, label: label(x) }));
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={faqLd(page.sections)} />
      <JsonLd data={webPageLd({ kind: page.kind, slug: page.slug, title: page.seo_title, description: page.seo_description, path, updated: page.updated_at })} />
      {page.kind === 'service' && <JsonLd data={serviceLd(page.service_name || page.h1, page.seo_description, path)} />}
      {page.kind === 'home'
        ? <><Hero h1={page.h1} lead={page.lead} /><Marquee /><Intro /><SolutionsExplorer /><EcosystemMap /><IndustriesExplorer /><Why /><ProcessTimeline /></>
        : <><nav aria-label="Breadcrumb" className="wrap mono" style={{ paddingTop: 28, fontSize: 11, color: '#7F8FB0' }}>{crumbs.map((c, i) => <span key={c.path}>{i > 0 && ' / '}{i < crumbs.length - 1 ? <Link href={c.path} className="ilink">{c.name}</Link> : <span aria-current="page">{c.name}</span>}</span>)}</nav><PageHero h1={page.h1} lead={page.lead} ctx={ctx} eyebrow={page.kind === 'service' ? 'Service' : undefined} /></>}
      {page.sections.map((s, i) => (
        <div key={i} style={{ display: 'contents' }}>
          <SectionView s={s} ctx={ctx} />
          {i === 0 && EXTRAS[page.slug]}
        </div>
      ))}
      {page.slug === 'contact' && <section className="sec" style={{ padding: '40px 0 80px' }}><div className="wrap" style={{ maxWidth: 760 }}><ContactForm /></div></section>}
      {children}
      {page.kind !== 'home' && page.slug !== 'contact' && <p className="wrap mono" style={{ fontSize: 11, color: '#7F8FB0', margin: '8px auto 0' }}>Last updated <time dateTime={page.updated_at.slice(0, 10)}>{page.updated_at.slice(0, 10)}</time></p>}
      <RelatedLinks items={related} />
      {page.slug !== 'contact' && <CtaBand />}
    </>
  );
}
