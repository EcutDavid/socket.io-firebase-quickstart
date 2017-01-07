var path = require('path');

var additionalPaths = [];
var srcPath = path.join(__dirname, '/../src');

module.exports = {
  additionalPaths: additionalPaths,
  port: 8100,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: './assets/'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: 8100,
    publicPath: '/assets/',
    noInfo: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: `${srcPath}/actions/`,
      components: `${srcPath}/components/`,
      sources: `${srcPath}/sources/`,
      stores: `${srcPath}/stores/`,
      app: srcPath,
      styles: `${srcPath}/styles/`
    }
  },
  module: {},
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer')
    ];
  }
};
