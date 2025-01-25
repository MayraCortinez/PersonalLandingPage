/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b", 
        accent: "#0ea5e9", 
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
  },
},
  plugins: [],
};
