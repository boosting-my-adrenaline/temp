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
            spacing: {
                'content': '1400px',
                'navbar-height': '50px',
            },
            maxWidth: {
                content: '1400px',
            },
        },
    },
    plugins: [],
};
