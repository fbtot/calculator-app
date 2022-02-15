const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode,
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
