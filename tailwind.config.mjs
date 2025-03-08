/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                move_from: {
                    "0%": { "--tw-gradient-from-position": "0%" },
                    "100%": { "--tw-gradient-from-position": "100%" },
                },
                come_in: {
                    "0%": { transform: "scale(0)", opacity: 0 },
                    "100%": { transform: "scale(100%)", opacity: 1 },
                },
                come_right: {
                    "0%": { transform: "translateX(-4%)", opacity: 0 },
                    // '70%': { transform: 'translateX(+2%)', opacity: 1 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                come_up: {
                    "0%": { transform: "translateY(30%)", opacity: 0 },
                    // '95%': { transform: 'translateY(-1%)', opacity: 1 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                disappear: {
                    "0%": { opacity: 1 },
                    "95%": { opacity: 1 },
                    "100%": { transform: "scale(0)", opacity: 0 },
                },
            },
            animation: {
                move_from_skeleton:
                    "move_from 2s ease-out -2s infinite alternate forwards",
                come_in: "come_in .3s ease-in-out forwards",
                come_right: "come_right .3s ease-in-out forwards",
                come_up: "come_up .3s ease-out",
                go_out: "come_in .3s ease-in-out forwards reverse",
                go_none: "disappear .3s ease-in-out forwards 5s",
            },
            colors: {
                orange: "#ffa500",
                "orange-1": "rgb(255, 72, 58)",
                "blue-dark": "rgb(23, 27, 34)",
                "gray-blue": "#171b22",
                "blue-light": "#00aeff",
                "red-light": "#dc143c",
                "red-dark": "#970026",
                "gray-dark": "rgb(83, 83, 83)",
                "gray-mid": "rgb(163, 163, 163)",
                "gray-light": "rgb(218, 218, 218)",
                "dark-dark": "rgb(22, 22, 22)",
                "dark-light": "rgba(27, 27, 27)",
                black: "#000",
                white: "#fff",

                // header_gradient: linear-gradient(
                //     to right,
                //     rgba(#002842, 0.8),
                //     rgba(#00aeff, 0.8)
                // );
            },
            backgroundImage: {
                "gradient-red-bottom-left":
                    "radial-gradient(farthest-corner at 10% 100%,rgba(255, 0, 0, 0.09) -20%,transparent 70%);",
                "gradient-red-top-left":
                    "radial-gradient(farthest-corner at 10% 0%,rgba(255, 0, 0, 0.09) -20%,transparent 70%);",
                "gradient-blue-bottom-right":
                    "radial-gradient(farthest-corner at 100% 100%,rgba(0, 120, 255, 0.09) -20%,transparent 70%);",
                "gradient-blue-top-right":
                    "radial-gradient(farthest-corner at 100% 0%,rgba(0, 120, 255, 0.09) -20%,transparent 70%);",
            },
        },
    },
    plugins: [],
};
