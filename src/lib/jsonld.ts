import { SITE_URL, SITE_NAME } from './site';
import type { Section } from './db';

export const orgLd = (email?: string, sameAs: string[] = []) => ({
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': ['Organization', 'ProfessionalService'], '@id': `${SITE_URL}/#org`, name: SITE_NAME, url: SITE_URL,
      description: 'AI consultancy for small and medium-sized businesses in the United States: automation, chatbots and agents, dashboards, machine learning and IoT.',
      areaServed: { '@type': 'Country', name: 'United States' },
      ...(email && !email.includes('PLACEHOLDER') ? { email } : {}),
      ...(sameAs.length ? { sameAs } : {}) },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, publisher: { '@id': `${SITE_URL}/#org` } },
  ],
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: SITE_URL + it.path })),
});

export const serviceLd = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org', '@type': 'Service', name, description, url: SITE_URL + path,
  provider: { '@id': `${SITE_URL}/#org` }, areaServed: { '@type': 'Country', name: 'United States' },
});

export const faqLd = (sections: Section[]) => {
  const qa = sections.flatMap((s) => (s.type === 'faq' ? s.items : []));
  if (!qa.length) return null;
  return { '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: qa.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) };
};

export const articleLd = (p: { title: string; description: string; path: string; published?: string | null; updated: string }) => ({
  '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.description,
  mainEntityOfPage: SITE_URL + p.path, datePublished: p.published || p.updated, dateModified: p.updated,
  author: { '@id': `${SITE_URL}/#org` }, publisher: { '@id': `${SITE_URL}/#org` },
});

export const webPageLd = (p: { kind: string; slug: string; title: string; description: string; path: string; updated: string }) => ({
  '@context': 'https://schema.org',
  '@type': p.slug === 'about' ? 'AboutPage' : p.slug === 'contact' ? 'ContactPage' : 'WebPage',
  '@id': `${SITE_URL}${p.path === '/' ? '' : p.path}#webpage`, url: SITE_URL + (p.path === '/' ? '' : p.path),
  name: p.title, description: p.description, inLanguage: 'en-US',
  dateModified: p.updated.includes('T') ? p.updated : p.updated.replace(' ', 'T') + 'Z',
  isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': `${SITE_URL}/#org` },
});
