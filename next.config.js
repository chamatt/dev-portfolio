const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const webpackconfig = (config, options) => {
  config.module.rules.push(
    {
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    },
    {
      test: /\.ya?ml$/,
      type: "json", // Required by Webpack v4
      use: "yaml-loader",
    }
  );
  return config;
},

const nextConfig = {
  webpack: webpackconfig
};

module.exports = withPlugins(
  [
    [optimizedImages, {}],
    // your other plugins here
  ],
  nextConfig
);
