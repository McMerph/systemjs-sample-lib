const fs = require('fs')
const path = require('path')
const systemjsInterop = require('systemjs-webpack-interop/webpack-config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const COMPONENTS = {
  PATH: path.resolve('src', 'components'),
  REGEX: /.*\.jsx?$/,
}
const entries = fs.readdirSync(COMPONENTS.PATH).reduce(
  (acc, fileName) => ({
    ...acc,
    ...(COMPONENTS.REGEX.test(fileName)
      ? { [path.parse(fileName).name]: path.resolve(COMPONENTS.PATH, fileName) }
      : {}),
  }),
  {}
)

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
  entry: entries,
  output: {
    path: path.resolve('dist'),
    libraryTarget: 'system',
  },
  devtool: 'source-map',
  plugins: [new CleanWebpackPlugin()],
})

// Throws errors if your webpack config won't interop well with SystemJS
systemjsInterop.checkWebpackConfig(module.exports)
