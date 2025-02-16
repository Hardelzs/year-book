
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
        '.clip-path-login': {
          clipPath: 'inset(0 50% 0 0)',
        },
        '.clip-path-signup': {
          clipPath: 'inset(0 0 0 50%)',
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite reverse",
      },
    },
  },
  plugins: [
  ],
}

