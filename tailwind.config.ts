import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      blur: {
        xsm: "2px",
      },
      keyframes: {
        MoveRight: {
          " 0%, 100%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            " animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        MoveLeft: {
          " 0%, 100%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            " animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        MoveRight: "MoveRight 1s infinite",
        MoveLeft: "MoveLeft 1s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "my-bg": "url('/background.jpg')",
      },
    },
    backgroundImage: {
      body: "url('/newback.jpg')",
    },
  },

  plugins: [],
};
export default config;
