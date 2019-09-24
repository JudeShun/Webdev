const path = require('path')
module.exports ={
    configureWebpack: {
        resolve: {
            alias: {
                "src":path.resolve(__dirname,'src'),
                "assets":path.resolve(__dirname,'src/assets'),
                "components":path.resolve(__dirname,'src/components'),
                "modules":path.resolve(__dirname,'src/modules'),
                "services":path.resolve(__dirname,'src/services'),
                "router":path.resolve(__dirname,'src/router'),
            }
        }
    }
}