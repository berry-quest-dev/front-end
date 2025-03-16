import baseConfig from "../../packages/config/jest.config.mjs";

export default {
  ...baseConfig,
  displayName: "web",
  roots: ["<rootDir>/src"],
};
