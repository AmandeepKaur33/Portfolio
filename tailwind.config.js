module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "#000000",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
