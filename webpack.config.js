const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode,
  entry: {
    vendor: {
      import: './src/js/vendor.js',
      filename: 'vendor.js',
    },
    main: {
      import: './src/js/index.js',
      dependOn: 'vendor',
    },
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /vendor/],
        use: 'babel-loader',
      },
      {
        test: /\.mp3$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
      linkType: 'text/css',
    }),
  ],
  devServer: {
    static: './dist/',
    hot: true,
    devMiddleware: {
      publicPath: '/dist/',
      writeToDisk: true,
    },
  },
  devtool: 'source-map',
};
