module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    compression:{
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8,
      }
    }
  }
};
