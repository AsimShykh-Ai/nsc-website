import raw from '@/content/showcase.json';

export type Sol = { name: string; short: string; color: string; desc: string; caps: string[] };
export type Eco = { name: string; text: string; talks: string[]; example: string };
export type Ind = { name: string; icon: string; lead: string; apps: [string, string][] };
export type Step = { name: string; text: string; items: string[] };

export const SOL = raw.SOL as Sol[];
export const ECO = raw.ECO as Eco[];
export const IND = raw.IND as Ind[];
export const WHYS = raw.WHYS as [string, string][];
export const STEPS = raw.STEPS as Step[];
export const HTML = raw.HTML as { hero: string; marquee: string; solSvgs: string[] };
// Service page each solution tab links to (same order as SOL)
export const SOL_HREFS = [
  '/services/ai-business-automation', '/services/ai-social-media-automation', '/services/ai-chatbots-agents',
  '/services/ai-business-dashboards', '/services/ai-machine-learning', '/services/iot-smart-technology',
];
