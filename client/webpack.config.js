const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    assetModuleFilename: 'images/[name][ext][query]',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new WebpackPwaManifest({
      name: 'Test de Frontend de MercadoLibre',
      short_name: 'Frontend MercadoLibre',
      description: 'Bienvenido al Test de Frontend de MercadoLibre',
      background_color: '#EDEDED',
      theme_color: '#222222',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/assets/images/Logo_ML.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve('src/assets/images/Logo_ML_2x.png'),
          size: '1024x1024',
        },
        {
          src: path.resolve('src/assets/images/Logo_ML_2x.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
    new GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp('http://http2.mlstatic.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        // {
        // urlPattern: new RegExp(
        //   'add prod url'
        // ),
        // handler: 'NetworkFirst',
        // options: {
        //   cacheName: 'api',
        // },
        // }
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    devMiddleware: {
      index: 'index.html',
    },
    historyApiFallback: true,
    compress: true,
    port: 3004,
  },
};
