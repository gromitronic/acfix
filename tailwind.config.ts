import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cold: "#EAF7FF",
        service: "#0B5CAD",
        navy: "#082B45",
        aqua: "#1FBFD0",
        coral: "#FF6B3D",
        gold: "#FDBA31",
        mist: "#F5F8FB",
        slatecopy: "#243746",
        softborder: "#D7E6EF"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(8, 43, 69, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
