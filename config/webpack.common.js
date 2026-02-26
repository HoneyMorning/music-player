const { root } = require('./root');
const { ProgressPlugin, BannerPlugin } = require('webpack');

module.exports = {
  entry: {
    app: root('src/index.jsx'),
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    strictExportPresence: true,
  },
  plugins: [
    new ProgressPlugin(),
    new BannerPlugin('©2017 honeymorning.com taylorpzreal@gmail.com'),
  ],
};
