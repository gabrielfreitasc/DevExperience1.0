/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        default: "#09090A",
      },
      screens: {
        'xs': {'max':'425px'},
      },
      fontFamily: {
        suprecot: "suprecot",
        sans: "poppins"
      },
      boxShadow: {
        "default": "0 0 10px 0 #6d28d9",
        "light-violet": `0 0 5px rgb(91 33 182 / var(--tw-bg-opacity)),
                        0 0 25px rgb(91 33 182 / var(--tw-bg-opacity)),
                        0 0 50px rgb(91 33 182 / var(--tw-bg-opacity)),
                        0 0 100px rgb(91 33 182 / var(--tw-bg-opacity))`,
        "light": `-2px -1px 5px 0 var(--tw-shadow-color)`,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
