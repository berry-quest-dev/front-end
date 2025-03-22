import type { NextConfig } from "next";
import withTM from "next-transpile-modules";

const nextConfig: NextConfig = withTM(["@packages/ui"])({
  reactStrictMode: true,
});

export default nextConfig;

// import withTM from "next-transpile-modules";

// const nextConfig = withTM(["@packages/ui"])({
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       react: require.resolve("react"),
//       "react/jsx-runtime": require.resolve("react/jsx-runtime"),
//       "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime"),
//     };
//     return config;
//   },
// });

// export default nextConfig;
