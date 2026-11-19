export const SITE_URL = (process.env.SITE_URL || 'http://localhost:3000').replace(/\/$/, '');
export const SITE_NAME = 'Neural Shades Creations';
export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
export const SERVICES = [
  { href: '/services/ai-business-automation', label: 'AI Business Automation' },
  { href: '/services/ai-social-media-automation', label: 'AI Social Media Automation' },
  { href: '/services/ai-chatbots-agents', label: 'Chatbots and Agents' },
  { href: '/services/ai-receptionist', label: 'AI Receptionist' },
  { href: '/services/ai-business-dashboards', label: 'Business Dashboards' },
  { href: '/services/ai-machine-learning', label: 'AI and Machine Learning' },
  { href: '/services/iot-smart-technology', label: 'IoT and Smart Technology' },
];
export const slugToPath = (slug: string) => (slug === 'home' ? '/' : '/' + slug);
