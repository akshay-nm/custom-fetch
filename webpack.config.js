const path = require('path')
module.exports = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'custom-fetch.js',
    library: {
      name: 'CustomFetch',
      type: 'var',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
