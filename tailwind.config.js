module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
//  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark",
      "cupcake" ,"bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter"], // you can add more themes if needed
  },
}
