module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dnd-red': '#8B0000',
        'dnd-gold': '#FFD700',
        'dnd-brown': '#8B4513',
        'dnd-gray': '#121212',
      },
      fontFamily: {
        'dnd': ['Cinzel', 'serif'],
        'body': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
} 