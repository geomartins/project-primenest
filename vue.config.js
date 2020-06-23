//const manifestJSON = require('./public/manifest.json')
module.exports = {
    chainWebpack: (config) => {
      config.plugins.delete('preload')
      config.plugin('html').tap(args => {
        args[0].hash = true
        return args
      })
        
    },
    pwa: {
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          swSrc: 'service-worker.js',
        },
      },
    
    devServer: {
     
      before: app => {
        app.set('etag', 'strong')
        app.use((req, res, next) => {
          res.set('Cache-Control', 'must-revalidate')
          next()
        })
      }
    }
}



