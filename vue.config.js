module.exports = {
    // 基本路径 baseURL已经过时
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    runtimeCompiler: true,

    chainWebpack: () => {},
    configureWebpack: () => {},

    productionSourceMap: true,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        //modules: false
        requireModuleExtension: true
    },

    parallel: require('os').cpus().length > 1,

    pwa: {},
    devServer:{
        host:'0.0.0.0',
        port:'8080',
        open:true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy:{ //配置跨域
            '/api':{
                target:'http://mock-api.com/vzMrDQgG.mock',
                ws:true,
                changeOrigin:true,//允许跨域
                pathRewrie:{
                    '^/api':''   //请求的时候使用这个api就可以
                }
            }
        }
    },
    pluginOptions: {
        // ...
    }
}