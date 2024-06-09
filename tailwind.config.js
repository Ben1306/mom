/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "custom-black": "#11010a"
            },
            fontFamily: {
                handwritten: "Pacifico",
                kalam: "Kalam"
            },
            keyframes: {
                grow: {
                    '0%': {transform: "scale(0.2)"},
                    '100%': {transform: "scale(1)"},
                },
                "flower-pulse": {
                    '0%': { transform: "scale(1)", },
                    '50%': { transform: "scale(1.1)" },
                    '100%': { transform: "scale(1)" },
                },
                "flower-spin": {
                    '0%': { transform: "rotate(0deg)", },
                    '25%': { transform: "rotate(10deg)" },
                    '75%': { transform: "rotate(-10deg)" },
                    '100%': { transform: "rotate(0deg)" },
                },
                "arrival-translate": {
                    '0%': {transform: "translate(-50%, 0%)", opacity: 0},
                    '100%': {transform: "translate(0%, 0%)", opacity: 1},
                }

            },
            animation: {
                "sun": "spin 40s linear infinite",
                "pulse-flower": "grow 2s ease-out forwards, flower-pulse 2s ease-in-out infinite 2s",
                "spin-flower": "grow 2s ease-out forwards, flower-spin 4s ease-in-out infinite 2s",
                "title": "arrival-translate 2s ease-out forwards"
            }
            ,
        },
    },
    plugins: [],
}

