/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carl: '#FAF1E4',
        background: {
          light: '#FAF1E4',
        },
        text: {
          primary: '#55823D',
        },
      },
      backgroundImage: {
        'BGblue': "url('assets/svgs/BGBlue.svg')"
      },
      fontSize: {
        'h1' : '6rem',
        'h2' : '3.75rem',
        'h3' : '3rem',
        'h4' : '2.125rem',
        'h5' : '1.5rem',
        'h6' : '1.25rem',
        's1' : '1rem',
        's2' : '0.875rem',
        'b1' : '1rem',
        'b2' : '0.875rem',
        'btn' : '0.875rem',
        'cp' : '0.75rem',
        'ol' : '0.625rem',
      }
    },
  },
  plugins: [],
};