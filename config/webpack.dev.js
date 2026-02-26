const { root } = require('./root');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  output: {
    pathinfo: true,
    filename: '[name].[fullhash:20].bundle.js',
    chunkFilename: '[name].[fullhash:20].chunk.js',
    path: root('dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          },
          {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10000,
              },
            },
            generator: {
              filename: 'assets/[name].[hash:8][ext]',
            },
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      'postcss-flexbugs-fixes',
                      ['autoprefixer', { flexbox: 'no-2009' }],
                    ],
                  },
                },
              },
            ],
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  postcssOptions: {
                    plugins: [
                      'postcss-flexbugs-fixes',
                      ['autoprefixer', { flexbox: 'no-2009' }],
                    ],
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs|cjs)$/, /\.html$/, /\.json$/, /\.css$/, /\.scss$/],
            type: 'asset/resource',
            generator: {
              filename: 'assets/[name].[hash:8][ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
  ],

  devServer: {
    compress: true,
    port: 9000,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
    static: {
      directory: root(''),
    },
  },

  performance: {
    hints: false,
  },
});
