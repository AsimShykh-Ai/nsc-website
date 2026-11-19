import { allPages } from '@/lib/db';
import { SITE_URL, SITE_NAME, slugToPath } from '@/lib/site';

export const dynamic = 'force-static';
// Plain-text site summary for AI assistants. Not an official standard; harmless.
export function GET() {
  const lines = [
    `# ${SITE_NAME}`, '',
    `> AI consultancy for small and medium-sized businesses in the United States: business automation, AI chatbots and agents, AI receptionist, dashboards, machine learning and IoT.`, '',
    '## Pages',
    ...allPages().map((p) => `- [${p.seo_title}](${SITE_URL}${slugToPath(p.slug) === '/' ? '' : slugToPath(p.slug)}): ${p.seo_description}`),
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
