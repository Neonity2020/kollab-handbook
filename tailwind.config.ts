import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f1e",
        surface: "#111827",
        surface2: "#1a2236",
        border: "#1f2d45",
        accent: "#3b82f6",
        "accent-light": "#60a5fa",
      },
    },
  },
  plugins: [],
};

export default config;
