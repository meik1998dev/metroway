/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{ts,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#0578ff',
         },
      },
   },
   plugins: [require('@tailwindcss/line-clamp')],
};
