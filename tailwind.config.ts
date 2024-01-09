import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'gradient-l': 'rgba(10, 87, 131, 1)',
        'gradient-r': 'rgba(24, 161, 154, 1)',
        // 'blue-wave' : '#0A5783',
        'orange' : 'rgba(251, 115, 6, 1)',
      },

    },
  },
  plugins: [],
}
export default config
