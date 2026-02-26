const { root } = require('./root');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  bail: true,
  recordsPath: root('docs/build-records.json'),
  devtool: false,

  output: {
    filename: '[name].[contenthash:20].bundle.js',
    chunkFilename: '[name].[contenthash:20].chunk.js',
    path: root('dist'),
    publicPath: '/',
    clean: true,
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
                compact: true,
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
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
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
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      'postcss-flexbugs-fixes',
                      ['autoprefixer', { flexbox: 'no-2009' }],
                    ],
                  },
                },
              },
              'sass-loader',
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

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            ascii_only: true,
            comments: false,
          },
          compress: {
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: root('src/assets'),
          to: root('dist/assets'),
          globOptions: {
            ignore: ['**/*.scss', '**/*.css', '**/fonts/*'],
          },
        },
      ],
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: root('src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
    }),

    new WebpackManifestPlugin({
      fileName: 'app-manifest.json',
    }),
  ],
});
