const express = require('express')
const app = express()
const util = require('./util')
const moment = require('moment')

// 端口监听
app.listen(7857, function(){
    console.log('Server start success at:', moment().format('YYYY-MM-DD HH:mm:ss'))
})

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
    let sql = 'select id from username where username = ? and password = ?'
    let username = req.body.username
    let password = util.md5(req.body.password)
    let params = [username, password]
    util.query2(sql, params, function(result){
        if(result[0]){
            let updateSql = 'update username set loginTime = ?, token = ? where id = ?'
            let loginTime = moment().format('YYYY-MM-DD HH:mm:ss')
            let token = util.md5(username + moment())
            let id = result[0].id
            let updateParams = [loginTime, token, id]
            util.update(updateSql, updateParams, function(result2){
                if(result2.affectedRows){
                    res.send({code:'1', id: id, token: token, message: '登录成功'})
                }
            })
        }else{
            res.send({code:'0', message: '账号名或密码错误'})
        }
    })
})

// 注册
app.post('/register', function(req, res){
    let username = req.body.username
    let password = req.body.password
    let password2 = req.body.password2
    if(username == ''){
        res.send({code:'0', message: '用户名不能为空'})
        return
    }
    if(password == ''){
        res.send({code:'0', message: '密码不能为空'})
        return
    }
    if(password != password2){
        res.send({code:'0', message: '两次输入的密码不一致'})
        return
    }
    let querySql = 'select 1 from username where username = ? limit 1'
    let queryParams = [username]
    util.query2(querySql, queryParams, function(result){
        if(result[0]){
            res.send({code:'0', message: '此用户名已被注册'})
        }else{
            let insertSql = 'insert into username(id, username, nickname, password, regTime) values(?, ?, ?, ?, ?)'
            let id = util.md5(username + moment().format('X'))
            password = util.md5(password)
            let regTime = moment().format('YYYY-MM-DD HH:mm:ss')
            let insertParams = [id, username, username, password, regTime]
            util.insert(insertSql, insertParams, function(result2){
                if(result2.affectedRows){
                    res.send({code: '1', message: '注册成功'})
                }
            })
        }
    })
})

// 获取常去网站列表
app.post('/getWebList', function(req, res){
    let sql = 'select * from webList order by visitCount desc'
    util.query(sql, function(result){
        res.send(result)
    })
})

// 新增常去网站
app.post('/addWebList', function(req, res){
    let name = req.body.name
    let url = req.body.url
    if(name == ''){
        res.send({code:'0', message: '网站名不能为空'})
        return
    }
    if(url == ''){
        res.send({code:'0', message: '网站链接地址不能为空'})
        return
    }
    let addTime = moment().format('YYYY-MM-DD HH:mm:ss')
    let id = util.md5(name + moment().format('X'))
    let sql = 'insert into webList(id, name, url, addTime) values(?, ?, ?, ?)'
    let params = [id, name, url, addTime]
    util.insert(sql, params, function(result){
        res.send({code:'1', message: '添加成功'})
    })
})

// 访问次数 + 1
app.post('/addVisitCount', function(req, res){
    let selectSql = 'select visitCount from webList where id = ?'
    let id = req.body.id
    let selectParams = [id]
    util.query2(selectSql, selectParams, function(result){
        let updateSql = 'update webList set visitTime = ?, visitCount = ? where id = ?'
        let visitTime = moment().format('YYYY-MM-DD HH:mm:ss')
        let visitCount = result[0].visitCount - 0 + 1
        let updateParams = [visitTime, visitCount, id]
        util.update(updateSql, updateParams, function(result2){
            res.send({code:'1', message: '点击次数成功+1'})
        })
    })
})

// token验证
app.post('/tokenCheck', function(req, res){
    if(req.body.id == undefined){
        res.send({code:'0', message: '未登录'})
        return
    }
    let sql = 'select token from username where id = ?'
    let id = req.body.id
    let params = [id]
    let token = req.body.token
    util.query2(sql, params, function(result){
        if(result[0].token != undefined && result[0].token == token){
            res.send({code:'1', message: 'token验证通过'})
        }else{
            res.send({code:'0', message: 'token验证未通过'})
        }
    })
})

// 查询用户
app.post('/getUsername', function(req, res){
    let id = req.body.id
    if(id == undefined){
        res.send({code:'0', message: 'id不能为空'})
        return
    }
    let sql = 'select * from username where id = ?'
    let params = [id]
    util.query2(sql, params, function(result){
        if(result[0] == undefined){
            res.send({code:'0', message: '查找不到此用户'})
        }else{
            res.send({code:'1', message: result[0]})
        }
    })
})