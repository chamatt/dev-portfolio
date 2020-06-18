const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin"); //brotli

function webpackconfig(config, options) {
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
}
const nextConfig = {
  webpack: webpackconfig,
};

module.exports = withPlugins(
  [
    [optimizedImages, {}],
    new CompressionPlugin({
      //gzip plugin
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      //brotli plugin
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    // your other plugins here
  ],
  nextConfig
);
