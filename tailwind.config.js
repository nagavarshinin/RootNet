/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          'surface-hover': 'var(--bg-surface-hover)',
        },
        border: {
          subtle: 'var(--border-subtle)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          'primary-dim': 'var(--accent-primary-dim)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        status: {
          critical: 'var(--status-critical)',
          warning: 'var(--status-warning)',
          healthy: 'var(--status-healthy)',
          info: 'var(--status-info)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
