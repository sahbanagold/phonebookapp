var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var config = require('./webpack.config')

var path = require('path')
var express = require('express')
var app = express()
var port = 5000

var compiler = webpack(config)

app.use(webpackDevMiddleware(compiler,{noInfo:true, publicPath: config.output.publicPath}))

app.use(webpackHotMiddleware(compiler))

///////////////

app.use('/',express.static(path.join(__dirname,'public')))

////////////////////

app.listen(port,function (err) {
  if(err){
    console.log(err)
  } else{
    console.log('serving on port ',port)
  }
})
