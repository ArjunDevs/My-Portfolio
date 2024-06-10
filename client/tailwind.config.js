/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                oswald: ["Oswald", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
                "libre-barcode": ["'Libre Barcode 128 Text'", "system-ui"],
                orbitron: ["Orbitron", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
                "roboto-condensed": ["Roboto Condensed", "sans-serif"],
                "rubik-mono-one": ["Rubik Mono One", "sans-serif"],
            },
            colors: {
                "red-pantone": "#e63946",
                honeydew: "#f1faee",
                "non-photo-blue": "#a8dadc",
                cerulean: "#457b9d",
                "berkeley-blue": "#1d3557",
            },
        },
    },
    plugins: [],
};
