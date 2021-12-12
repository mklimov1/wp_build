const { merge } = require(`webpack-merge`);
const webpack = require(`webpack`);
const common = require(`./common.config`);

module.exports = merge(common, {
  mode: `development`,
  devtool: `inline-source-map`,
  devServer: {
    historyApiFallback: true,
    open: false,
    compress: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
