/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        fira: ["Fira Code", "monospace"],
        "ibm-mono": ["IBM Plex Mono", "monospace"],
        'vcr-mono': ['"VCR-Mono"', 'sans-serif'],
      },
      backgroundImage: {
        'primary': "url('/bg.mp4')",
        'secondary': "url('/endless-constellation-2.svg')"
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

