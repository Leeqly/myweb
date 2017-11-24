var express = require('express')
var app = express()

// 解析post提交的数据
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 跨域设置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
});

// 登录
app.post('/login', function (req, res) {
    var username = req.body.username
    var password = req.body.password
    if(username == 'q123' && password == 'w123456'){
        res.send({code:'1', message: '登陆成功'})
    }else{
        res.send({code:'0', message: '登陆失败'})
    }
})
 
var server = app.listen(7857, function(){
    console.log('Server startup successfull')
})