import type { MetadataRoute } from 'next';
import { allPages } from '@/lib/db';
import { SITE_URL, slugToPath } from '@/lib/site';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return allPages().map((p) => ({
    url: SITE_URL + (slugToPath(p.slug) === '/' ? '' : slugToPath(p.slug)),
    lastModified: new Date(p.updated_at.replace(' ', 'T') + 'Z'),
  })).concat([{ url: SITE_URL + '/privacy', lastModified: new Date() }, { url: SITE_URL + '/terms', lastModified: new Date() }]);
}
