const express = require('express')
const app = express()
const util = require('./util')
const moment = require('moment')

// 解析post提交的数据
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 跨域设置
app.all('*', function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
});

// 登录
app.post('/login', function(req, res){
    let username = req.body.username
    let password = util.md5(req.body.password)
    let sql = 'select 1 from username where username = "' + username + '" and password = "' + password + '" limit 1'
    util.query(sql, function(result){
        if(result[0]){
            res.send({code:'1', message: '登录成功'})
        }else{
            res.send({code:'0', message: '账号名或密码错误'})
        }
    })
})

// 注册
app.post('/register', function(req, res){
    let username = req.body.username
    let password = util.md5(req.body.password)
    let password2 = util.md5(req.body.password2)
    if(username == ''){
        res.send({code:'0', message: '用户名不能为空'})
    }
    if(password == ''){
        res.send({code:'0', message: '密码不能为空'})
    }
    if(password != password2){
        res.send({code:'0', message: '两次输入的密码不一致'})
    }
    let id = util.md5(username + moment().format('X'))
    let now = moment().format('YYYY-MM-DD HH:mm:ss')
    let insertSql = 'insert into username(id, username, nickname, password, regTime) values(?, ?, ?, ?, ?)'
    let params = [id, username, username, password, now]
    let querySql = 'select 1 from username where username = "' + username + '" limit 1'
    util.query(querySql, function(result){
        if(result[0]){
            res.send({code:'0', message: '此用户名已被注册'})
        }else{
            util.insert(insertSql, params, function(result){
                if(result.affectedRows){
                    res.send({code: '1', message: '注册成功'})
                }
            })
        }
    })
    
})

// 端口监听
app.listen(7857, function(){
    console.log('Server start success at:', moment().format('YYYY-MM-DD HH:mm:ss'))
})