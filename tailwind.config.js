/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}",
    "./src/**/*"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'custom-bg-black': '#0d1117'
      },
      fontFamily: {
        'default': ["Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "sans-serif"]
      },
    },
  },
  plugins: [],
}

