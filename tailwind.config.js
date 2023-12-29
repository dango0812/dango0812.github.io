/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'default': ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif"]
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 15%, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInUp: 'fadeInUp 1.7s ease-in-out',
      }
    },
  },
  plugins: [],
}

