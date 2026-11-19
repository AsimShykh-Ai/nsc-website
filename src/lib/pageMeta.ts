import type { Metadata } from 'next';
import { getPage } from './db';
import { SITE_URL, slugToPath } from './site';

export function pageMetadata(slug: string): Metadata {
  const p = getPage(slug);
  if (!p) return { title: 'Not found', robots: { index: false } };
  const url = SITE_URL + slugToPath(slug);
  return {
    title: p.seo_title, description: p.seo_description,
    alternates: { canonical: url },
    openGraph: { title: p.seo_title, description: p.seo_description, url, type: 'website' },
    twitter: { title: p.seo_title, description: p.seo_description },
  };
}
