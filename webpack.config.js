var webpack = require('webpack')

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    path: './dist/',
    filename: 'blue-select.js',
    libraryTarget: 'var',
    library: 'BlueSelect'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'standard-loader',
        enforce: 'pre'
      }
    ]
  }
}
