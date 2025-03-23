import type { NextConfig } from "next";
import withTM from "next-transpile-modules";

const withTranspile = withTM(["@packages/ui"]);

const baseConfig: NextConfig = {
  reactStrictMode: true,
};

export default withTranspile(baseConfig);
