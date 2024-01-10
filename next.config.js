/** @type {import('next').NextConfig} */
const nextConfig = {};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer({});
// module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/play",
        permanent: true,
      },
    ];
  },
};
