import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          coral: '#f43f5e',
          amber: '#f59e0b',
          ink: '#111827'
        }
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(244, 63, 94, 0.16), transparent 55%)'
      }
    }
  },
  plugins: []
};

export default config;
