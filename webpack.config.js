const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: ['babel-loader'],
      },
    ],
  },
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'ui.js',
    library: 'ui',
    libraryTarget: 'system',
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
}
