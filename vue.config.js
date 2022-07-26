const path = require('path')
module.exports = {
  publicPath: '/',
	// output file directory
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  pluginOptions: {
    sitemap: {
        urls: [
            'https://pletenyikit.com/',
            'https://pletenyikit.com/toys',
            'https://pletenyikit.com/accessories',
            'https://pletenyikit.com/pillows',
            'https://pletenyikit.com/kitchen',
            'https://pletenyikit.com/order'
        ],
        defaults: {
          lastmod:    '2021-11-14',
          changefreq: 'daily',
          priority:   1.0,
      },
    }
  },
  filenameHashing: false,
  chainWebpack: (config) => {
         config.resolve.symlinks (true) // hot update
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
             // modify the configuration for the production environment ...
      config.mode = 'production'
             // Each dependencies packaged into separate files js
      let optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                return `npm.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
      Object.assign(config, {
        optimization
      })
    } else {
             // modify the configuration for the development environment ...
      config.mode = 'development'
    }
    Object.assign(config, {
             // development and production of common configuration
      resolve: {
                 extensions: [ '.js', '.vue', '.json'], // requesting the local json
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages')
                 } // Alias ​​Configuration
      }
    })
  },
     // production environment is generated sourceMap file
	productionSourceMap: true,
  css: {
		 // whether to use css separate plug-ExtractTextPlugin
		extract: true,
		 // open the CSS source maps? Whether in building style maps, false will increase build speed
		sourceMap: false,
		 // css preset configuration items
		loaderOptions: {}
	},
	parallel: require('os').cpus().length > 1,
	 // webpack-dev-server configuration
	devServer: {
		open: process.platform === 'darwin',
		host: '0.0.0.0',
		port: 8080,
		https: false,
		proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}