import type { Config } from "tailwindcss";

const config: Config = {
  content: ["../../apps/web/src/**/*.{js,ts,jsx,tsx}", "../../apps/admin/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
