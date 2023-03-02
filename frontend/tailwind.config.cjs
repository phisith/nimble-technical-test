/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#201547',
                'secondary': "#5739C0",
                'error': "#E40046"
            }
        },

    },
    plugins: [require('@tailwindcss/forms'),],
}