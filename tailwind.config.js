const BLOG = require('./blog.config');
const { fontFamily } = require('tailwindcss/defaultTheme');
const CJK = require('./lib/cjk');
const fontSansCJK = !CJK() ? [] : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`];
const fontSerifCJK = !CJK() ? [] : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`];

/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const tailwindConfig = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: '#faf8f7',
        },
        night: {
          DEFAULT: '#292626',
        },
        yellow: {
          light: '#ecc134',
          DEFAULT: '#f2cb53',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...fontFamily.sans, ...fontSansCJK],
        serif: ['"Source Serif"', ...fontFamily.serif, ...fontSerifCJK],
        noEmoji: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      gridTemplateColumns: {
        tabItems: 'repeat(auto-fit, minmax(150px, 1fr))', //minmax(最小幅,最大幅)
        feedItems: 'repeat(auto-fit, minmax(320px, 1fr))', //minmax(最小幅,最大幅)
      },
      boxShadow: {
        y: '0 8px 4px -4px rgba(0,0,0,0.1);',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = tailwindConfig;
