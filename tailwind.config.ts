import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#ffffff",
        primary: "#8fb3ff",
        secondary: "#ebf1ff",
        accent: "#d41d6d",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          text: "#000000",
          background: "#ffffff",
          primary: "#8fb3ff",
          secondary: "#ebf1ff",
          accent: "#d41d6d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
