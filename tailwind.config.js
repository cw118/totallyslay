/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    colors: {
      'dark-purple': '#4148a4',
    },
    fontFamily: {
      sans: ['Irish Grover', 'sans-serif'],
      spy: ['Rajdhani', 'serif'],
      kiwi: ['Kiwi Maru', 'serif'],
      verdana: ['Verdana', 'sans-serif']
    },
  },
};
