// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://nowpayments.io",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
