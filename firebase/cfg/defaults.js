function getDefaultModules() {
  return {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.(png|jpg|gif|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(mp4|ogg|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  };
}
module.exports = {
  getDefaultModules: getDefaultModules
};
