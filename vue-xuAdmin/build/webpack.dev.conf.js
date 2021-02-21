'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: path.resolve(__dirname, '../static/images/favicon.ico'),
      inject: true,
      dll: (function () {
        let max = 2
        let res = []
        for (let i = 0; i < max; i++) {
          const dllName = require(path.resolve(__dirname, `../dllManifest/xuAdmin${i}-manifest.json`)).name.split('_')
          res.push(`/static/dll/${dllName[0]}.${dllName[1]}.dll.js`)
        }
        return res
      })()
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
//           notes: [`   _     _      _     _      _     _-     _     _      _     _      _     _      _     _      _     _      _     _      _     _
//   (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)    (c).-.(c)
//    / ._. \\      / ._. \\      / ._. \\      / ._. \\      / ._. \\      / ._. \\      / ._. \\      / ._. \\      / ._. \\      / ._. \\
//  __\\( N )/__  __\\( i )/__  __\\( - )/__  __\\( R )/__  __\\( o )/__  __\\( n )/__  __\\( g )/__  __\\( - )/__  __\\( X )/__  __\\( u )/__
// (_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)(_.-/'-'\\-._)
//    || V ||      || u ||      || e ||      || x ||      || u ||      || A ||      || d ||      || m ||      || i ||      || n ||
//  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._  _.' \`-' '._
// (.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)(.-./\`-'\\.-.)
//  \`-'     \`-'  \`-'     \`-'  \`-'     \`-'  \`-'     \`-'  \`-'     \`-'  \`-'     \`-'  \`-'     \`-'  \`-'     \`-'  \`-'     \`-'  \`-'     \`-' `]
          notes: [`
                                                           $$$$$$\\        $$\\               $$\\
                                                          $$  __$$\\       $$ |              \\__|
$$\\    $$\\ $$\\   $$\\  $$$$$$\\         $$\\   $$\\ $$\\   $$\\ $$ /  $$ | $$$$$$$ |$$$$$$\\$$$$\\  $$\\ $$$$$$$\\
\\$$\\  $$  |$$ |  $$ |$$  __$$\\ $$$$$$\\\\$$\\ $$  |$$ |  $$ |$$$$$$$$ |$$  __$$ |$$  _$$  _$$\\ $$ |$$  __$$\\
 \\$$\\$$  / $$ |  $$ |$$$$$$$$ |\\______|\\$$$$  / $$ |  $$ |$$  __$$ |$$ /  $$ |$$ / $$ / $$ |$$ |$$ |  $$ |
  \\$$$  /  $$ |  $$ |$$   ____|        $$  $$<  $$ |  $$ |$$ |  $$ |$$ |  $$ |$$ | $$ | $$ |$$ |$$ |  $$ |
   \\$  /   \\$$$$$$  |\\$$$$$$$\\        $$  /\\$$\\ \\$$$$$$  |$$ |  $$ |\\$$$$$$$ |$$ | $$ | $$ |$$ |$$ |  $$ |
    \\_/     \\______/  \\_______|       \\__/  \\__| \\______/ \\__|  \\__| \\_______|\\__| \\__| \\__|\\__|\\__|  \\__|



          `]
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
