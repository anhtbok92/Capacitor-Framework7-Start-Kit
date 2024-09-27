/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        float:
          '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      green: '#008000',
      orange: '#ffb155',
      gray: '#808080',
      lightgrey: '#c5d3e0',
      dovegray: '#616161',
      violet: '#ee82ee',
      lightgreen: '#89dca0',
      pink: '#ffc0cb',
      blue: '#0000ff',
      skyblue: '#35a0dc',
      red: '#ff5252',
      primary: '#22bec0',
      second: '#fbce49',
      transparent: 'transparent',
      elementDisabled: '#D4F2F2',
      element: '#28BDBF',
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
