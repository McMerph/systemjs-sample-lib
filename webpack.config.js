const path = require('path')
const systemjsInterop = require('systemjs-webpack-interop/webpack-config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = systemjsInterop.modifyWebpackConfig({
  mode: 'production',
  externals: {
    react: 'react',
  },
  module: {
    rules: [
      { parser: { system: false } },
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
    filename: 'bundle.js',
    libraryTarget: 'system',
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
})

// Throws errors if your webpack config won't interop well with SystemJS
systemjsInterop.checkWebpackConfig(module.exports)
