import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ivymodeLight: ['var(--font-ivymodeLight)'],
        ailregular: ['var(--font-ailregular)'],
        aillight: ['var(--font-aillight)'],
        ailbold: ['var(--font-ailbold)'],
        aillightitalic: ['var(--font-aillightitalic)'],
      },
      colors: {
        primary: "#899F87",
        secondary: "#E4ECE0",
        tertiary: "#C8D8C0",
        primarygray: "#213721",
        secondarygray: "#F2F6EF",
        boldgreen: "#3C5E39"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
