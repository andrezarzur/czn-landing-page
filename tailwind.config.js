/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {      
      colors: {
        primary: {
          DEFAULT: '#0000b8',   // base
          50:  '#F0F0FF',       // very light
          100: '#CCCCFF',       // light
          200: '#9999FF',       // soft
          600: '#000080',       // dark
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

