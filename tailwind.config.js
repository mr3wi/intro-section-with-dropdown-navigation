module.exports = {
    content: [
        "./src/**/*.{html,js}",
        './index.html'
    ],
    theme: {

        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'almostWithe': 'hsl(0, 0%, 98%)',
                'mediumGray': 'hsl(0, 0%, 41%)',
                'almostBlack': 'hsl(0, 0%, 8%)',
                'blue': 'hsl(228, 45%, 44%)'
            },
        },
    },
    plugins: [],
}
