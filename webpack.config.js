const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const publicPath = env && env.GH_PAGES === 'true' ? '/CollapseCssAnimation/' : './';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[contenthash].js',
      publicPath
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        { test: /\.(png|jpe?g|gif|svg)$/i, type: 'asset/resource' }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      ...(isProd ? [new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' })] : [])
    ],
    mode: isProd ? 'production' : 'development',
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 9000,
      compress: true,
      hot: true
    }
  };
};