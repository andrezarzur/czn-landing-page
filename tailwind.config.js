/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {      
      colors: {
        primary: {
          DEFAULT: '#FC0100',   // base
          50:  '#FFE5E5',       // very light
          100: '#FFC2C2',       // light
          200: '#FF8A8A',       // soft
          600: '#c60302',       // dark
        },
        secondary: {
          DEFAULT: '#0066FF',    // Electric blue for tech trust
          50: '#E5F0FF',         // Airy light blue
          100: '#B3D4FF',        // Cloud soft blue
          200: '#80B8FF',        // Sky medium blue
        },
        tertiary: {
          DEFAULT: '#FFD700',     // Golden yellow for energy
          50: '#FFF9E5',         // Light cream
          100: '#FFEEB3',        // Pale sunlight
          200: '#FFE480',        // Warm golden glow
        },
        neutral: {
          DEFAULT: '#1A1A1A',     // Deep engineering charcoal
          100: '#333333',         // Heavy machinery gray
          200: '#666666',         // Industrial medium gray
          300: '#999999',         // Concrete light gray
          400: '#CCCCCC',         // Metallic silver
        }
    }},
  },
  plugins: [],
}

