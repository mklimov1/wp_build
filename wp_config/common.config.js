const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const paths = require(`./paths`);

module.exports = {
  entry: {
    main: `${paths.src}/scripts/index.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [`babel-loader`],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [`style-loader`, `css-loader`, `postcss-loader`, `sass-loader`],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: `asset/resource`,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/template/index.html`,
      filename: `index.html`,
    }),
    new CleanWebpackPlugin(),
  ],
};
