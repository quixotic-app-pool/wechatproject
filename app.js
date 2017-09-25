var express = require('express');
var app = express();


// app.get('/',function(req, res, next){
//
//   res.send("come from Michael Chen")
//
// })
var wechat = require('wechat');
var config = {
  token: 'michaelchen',
  appid: 'wxba9eb4bfb3f26d57',
  encodingAESKey: 'SJBbOarjSwqb8wNy7IaP6QfeMEi2swsKXcv8FuBeNKj',
  checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

app.use(express.query());
app.use('/wechat', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  res.reply("wechat plugin works----michael chen");
}));


app.listen(8080);
console.log('Listening 8080...')
