var path = require('path');
var webpack = require('webpack');  //加载webpack依赖包

module.exports = {
    context: __dirname + '/development',
    entry: {
        app:'./main.js'
    },//入口文件并添加了热加载
    output: {
        path: __dirname+'/build',
        filename: '[name].bundle.js'  //输出文件
    },
    devServer:{
        contentBase:path.resolve(__dirname,'./build')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use:[{
                    loader: 'babel-loader',
                    options:{presets: ['es2015', 'react']}
                    //将react编译成js文件
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            //打包css文件
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader?sourceMap']
            },
            //编译sass文件
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
            //对图片进行打包
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    resolve: {
        //自动扩展文件后缀名
        extensions: [ '.js', '.json', '.scss', '.ts']
    }
};