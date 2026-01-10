const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'accent': 'var(--accent)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--text-primary)',
            a: {
              color: 'var(--accent)',
              '&:hover': { color: 'var(--accent)' },
            },
            h1: { color: 'var(--text-primary)' },
            h2: { color: 'var(--text-primary)' },
            h3: { color: 'var(--text-primary)' },
            strong: { color: 'var(--text-primary)' },
            li: { color: 'var(--text-primary)' },
          },
        },
        invert: {
          css: {
            color: 'var(--text-primary)',
            a: { color: 'var(--accent)' },
            h1: { color: 'var(--text-primary)' },
            h2: { color: 'var(--text-primary)' },
            h3: { color: 'var(--text-primary)' },
            strong: { color: 'var(--text-primary)' },
            li: { color: 'var(--text-primary)' },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
