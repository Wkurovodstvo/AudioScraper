const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    port: 5000,
    hot: true,
    open: true,
    compress: true,
    host: '0.0.0.0',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': __dirname + '/src',
      '@components': __dirname + '/src/components',
      '@page': __dirname + '/src/page',
      '@redux': __dirname + '/src/redux',
      '@util': __dirname + '/src/util',
      '@webApi': __dirname + '/src/webApi',
      '@style': __dirname + '/src/style',
      '@router': __dirname + '/src/router',
    },
  },
  output: {
    path: path.join(__dirname, 'build/dist'),
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
