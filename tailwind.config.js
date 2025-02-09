// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {fontFamily: {
//       harry: ['Harry P', 'sans-serif'],
//       lumos: ['Lumos', 'sans-serif'],
//     },},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night-sky': '#0a0e1a',
        'golden': '#FFD700',
        'golden-dark': '#c0a050',
        'parchment': '#f5f5dc',
        'dark-brown': '#654321',
      },
      fontFamily: {
        harryp: ['HarryP', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        clouds: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        twinkle: 'twinkle 2s infinite',
        clouds: 'clouds 30s linear infinite',
        float: 'float 6s infinite ease-in-out',

      },
    },
  },
  plugins: [],
};



// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'night-sky': '#0a0e1a',
//         'parchment': '#f5f5dc',
//         'golden': '#ffd700',
//         'golden-dark': '#c0a050',
//         'dark-brown': '#654321',
//       },
//     },
//   },
// };