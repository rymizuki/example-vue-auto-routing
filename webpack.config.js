const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve('./dist'),
      filename: '[name].bundle.js',
  },
  module: {
    rules: [
        { test: /\.vue$/, use: "vue-loader" },
    ]
  },
  resolve: {
    // importPathが`@/pages/`なのでnuxtと同じaliasを用意する
    alias: {
      "~": path.resolve('./src'),
      "~~": path.resolve('./src'),
      "@": path.resolve('./src'),
      "@@": path.resolve('./src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueAutoRoutingPlugin({
      // `pages`のディレクトリパス
      pages: `src/pages`,
    }),
  ]
}
