import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../web/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../admin/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: (config) => {
    config.resolve = {
      alias: {
        "@packages/ui": path.resolve(__dirname, "../../packages/ui/src"),
      },
      ...config.resolve,
    };
    return config;
  },
};
export default config;
