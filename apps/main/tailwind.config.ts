import type { Config } from "tailwindcss";

import sharedConfig from "@arc/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "../../packages/ui/dist/**/*.js"],
  presets: [sharedConfig],
};

export default config;
