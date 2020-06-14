const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  distDir: "build",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    [optimizedImages, {}],
    // your other plugins here
  ],
  nextConfig
);
