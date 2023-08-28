import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        "background": '#121b21',
        "background-light": '#243542',
        "primary": "#83e17a",
        "secondary": "#150825",
        "accent": "#90d72d",
        "text": "#fafdf7",
      },
      textColor: {
        primary: '#83e17a',
        secondary: '#150825',
        accent: '#90d72d',
        text: '#fafdf7',
      },
    }
  },
  plugins: [],
}
export default config
