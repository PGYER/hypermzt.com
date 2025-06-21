/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#6A00E1',
                secondary: '#4C00A3',
                accent: '#8B5CF6'
            },
            fontFamily: {
                'sora': ['Sora', 'sans-serif']
            }
        }
    },
    content: [
        './index.html',
        './**/*.html',
        './**/*.js'
    ]
}