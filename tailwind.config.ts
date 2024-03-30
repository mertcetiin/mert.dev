import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlack: '#000000',
        customGray: '#211F23',
        customWhite: '#ffff',
        customBackground: '#F8F9FA',
        customBorderGray: '#CED4DA',
        customPurple: '#B292FF',
        customRed: '#FF3939',
        customBlue600: '#2563EB',
        customBlue500: '#3B82F6',
        customGray600: '#4b5563',
        customGray400: '#9CA3AF',
        customTeal500: '#14B8A6',
        customGray800: '#1F2937',
        customPrimary: '#539DF3',
      },
    },
  },

  plugins: [],
};
export default config;