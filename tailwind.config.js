/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '374px',
            md: '734px',
            lg: '1068px',
        },
        extend: {
            colors: {
                dark: '#1d1d1f',
            },
            fontFamily: {
                SFPro: ['SF Pro Display'],
            },
            spacing: {
                'content': '1000px',
                'navbar-height': '50px',
            },
            maxWidth: {
                content: '1000px',
            },
            boxShadow: {
                custom1: '0 2px 12px rgb(0 0 0 / 10%)',
            },
        },
    },
    plugins: [],
};
