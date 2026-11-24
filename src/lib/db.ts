// Static version: page content is read from src/content/seed.json at build time. No database.
import seed from '@/content/seed.json';

export type Section =
  | { type: 'definition'; h2: string; text: string }
  | { type: 'cards'; h2: string; items: { title: string; text: string; href?: string }[] }
  | { type: 'bullets'; h2: string; items: string[] }
  | { type: 'faq'; h2: string; items: { q: string; a: string }[] };

export type PageRow = {
  id: number; slug: string; kind: string; service_name: string | null;
  seo_title: string; seo_description: string; h1: string; lead: string;
  body: string; published: number; updated_at: string;
};

const BUILT = '2026-11-19 00:00:00';
const rows: (PageRow & { sections: Section[] })[] = (seed as any[]).filter((p) => p.slug !== 'blog').map((p, i) => ({
  id: i + 1, slug: p.slug, kind: p.kind, service_name: p.service_name ?? null,
  seo_title: p.seo_title, seo_description: p.seo_description, h1: p.h1, lead: p.lead,
  body: JSON.stringify(p.body), published: 1, updated_at: BUILT, sections: p.body as unknown as Section[],
}));

export function getPage(slug: string) { return rows.find((r) => r.slug === slug) ?? null; }
export function allPages() { return rows; }

// Edit these three lines with your real details before going live.
const SETTINGS: Record<string, string> = {
  contact_email: 'neoaiverse95@gmail.com',  contact_phone: '+92 333 0033416',                    // optional
  social_instagram: 'https://www.instagram.com/neural_shades_creations/', social_tiktok: 'https://www.tiktok.com/@neuralshadescreations', social_youtube: 'https://www.youtube.com/channel/UCGqOnx0HcTWpBmEyfiXgBbw', social_facebook: 'https://www.facebook.com/profile.php?id=61583673880384', social_linkedin: '', social_x: '',
};
export function getSetting(key: string, fallback = '') { return SETTINGS[key] ?? fallback; }
