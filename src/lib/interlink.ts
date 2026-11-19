import { getSetting } from './db';

export type Rule = { phrase: string; href: string };

// Default contextual-link rules. Editable in Admin > Internal links (stored in settings.interlink_rules).
export const DEFAULT_RULES: Rule[] = [
  { phrase: 'AI receptionist', href: '/services/ai-receptionist' },
  { phrase: 'AI chatbots', href: '/services/ai-chatbots-agents' },
  { phrase: 'chatbots', href: '/services/ai-chatbots-agents' },
  { phrase: 'AI agents', href: '/services/ai-chatbots-agents' },
  { phrase: 'business process automation', href: '/services/ai-business-automation' },
  { phrase: 'workflow automation', href: '/services/ai-business-automation' },
  { phrase: 'automation', href: '/services/ai-business-automation' },
  { phrase: 'social media', href: '/services/ai-social-media-automation' },
  { phrase: 'dashboards', href: '/services/ai-business-dashboards' },
  { phrase: 'dashboard', href: '/services/ai-business-dashboards' },
  { phrase: 'machine learning', href: '/services/ai-machine-learning' },
  { phrase: 'predictive analytics', href: '/services/ai-machine-learning' },
  { phrase: 'IoT', href: '/services/iot-smart-technology' },
  { phrase: 'smart devices', href: '/services/iot-smart-technology' },
  { phrase: 'free consultation', href: '/contact' },
  { phrase: 'industries', href: '/industries' },
];

export function getRules(): Rule[] {
  try {
    const raw = getSetting('interlink_rules', '');
    if (!raw) return DEFAULT_RULES;
    const j = JSON.parse(raw) as Rule[];
    return Array.isArray(j) ? j.filter((r) => r.phrase && typeof r.href === 'string' && r.href.startsWith('/')) : DEFAULT_RULES;
  } catch { return DEFAULT_RULES; }
}

export type LinkCtx = { path: string; rules: Rule[]; used: Set<string>; max: number };
export const makeCtx = (path: string, max = 8): LinkCtx => ({ path, rules: getRules(), used: new Set(), max });

const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Splits text into plain strings and link parts. First occurrence per target per page, never self-links. */
export type Part = string | { text: string; href: string };
export function linkParts(text: string, ctx: LinkCtx): Part[] {
  const rules = [...ctx.rules].sort((a, b) => b.phrase.length - a.phrase.length);
  if (!rules.length || ctx.used.size >= ctx.max) return [text];
  const re = new RegExp(`\\b(${rules.map((r) => esc(r.phrase)).join('|')})\\b`, 'gi');
  const out: Part[] = []; let last = 0, m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const rule = rules.find((r) => r.phrase.toLowerCase() === m![1].toLowerCase());
    if (!rule || rule.href === ctx.path || ctx.used.has(rule.href) || ctx.used.size >= ctx.max) continue;
    ctx.used.add(rule.href);
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push({ text: m[1], href: rule.href }); last = m.index + m[1].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.length ? out : [text];
}

// Hand-picked "keep exploring" targets per page (slugs). Service pages also get the rest of the services.
export const RELATED: Record<string, string[]> = {
  'services/ai-business-automation': ['services/ai-chatbots-agents', 'services/ai-business-dashboards', 'services/ai-receptionist'],
  'services/ai-social-media-automation': ['services/ai-business-automation', 'services/ai-machine-learning', 'industries'],
  'services/ai-chatbots-agents': ['services/ai-receptionist', 'services/ai-business-automation', 'services/ai-business-dashboards'],
  'services/ai-receptionist': ['services/ai-chatbots-agents', 'services/ai-business-automation', 'industries'],
  'services/ai-business-dashboards': ['services/ai-machine-learning', 'services/iot-smart-technology', 'services/ai-business-automation'],
  'services/ai-machine-learning': ['services/ai-business-dashboards', 'services/iot-smart-technology', 'services/ai-chatbots-agents'],
  'services/iot-smart-technology': ['services/ai-machine-learning', 'services/ai-business-dashboards', 'services/ai-business-automation'],
  solutions: ['services', 'industries', 'contact'],
  services: ['solutions', 'industries', 'contact'],
  industries: ['services', 'services/ai-receptionist', 'contact'],
  about: ['services', 'industries', 'contact'],
  home: ['services', 'industries', 'about'],
};
