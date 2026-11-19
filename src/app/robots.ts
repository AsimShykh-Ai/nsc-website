import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Public content is open to search engines and to AI search/answer crawlers. Admin and API stay closed.
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended'];
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  const closed: string[] = [];
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: closed },
      ...AI_BOTS.map((b) => ({ userAgent: b, allow: '/', disallow: closed })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
