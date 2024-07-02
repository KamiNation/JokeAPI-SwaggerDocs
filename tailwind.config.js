/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '320px', 'max': '480px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '481px', 'max': '650px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '651px', 'max': '768px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '768px', 'max': '1024px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1024px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  },],
}

