var path = require('path');
var webpack = require('webpack');  //����webpack������

module.exports = {
    context: __dirname + '/development',
    entry: {
        app:'./main.js'
    },//����ļ���������ȼ���
    output: {
        path: __dirname+'/build',
        filename: '[name].bundle.js'  //����ļ�
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
                    //��react�����js�ļ�
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            //���css�ļ�
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader?sourceMap']
            },
            //����sass�ļ�
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
            //��ͼƬ���д��
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
        //�Զ���չ�ļ���׺��
        extensions: [ '.js', '.json', '.scss', '.ts']
    }
};