import type { Config } from 'tailwindcss';
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { midnight: '#05070D', navy: '#0A1226', electric: '#2F7BFF', cyan: '#22D3EE', violet: '#8B5CF6' } } },
  plugins: [],
} satisfies Config;
