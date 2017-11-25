// 数据库配置
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: '127.0.0.1',
	database: 'myweb',
	user: 'root',
	password: ''
});
connection.connect();

// 查询
exports.query = function(sql, fun){
	connection.query(sql, function(error, result, fields){
		if(error){
			console.log('[SELECT ERROR] - ', error.message);
			return;
		}
		fun(result);
	})
}

// 插入
exports.insert = function(sql, params, fun){
	connection.query(sql, params, function(error, result, fields){
		if(error){
			console.log('[INSERT ERROR] - ', error.message);
			return;
		}
		fun(result);
	});
	setTimeout(function(){
		connection.end()
	},50)	
}

// 更新
exports.update = function(sql, params, fun){
	connection.query(sql, params, function(error, result, fields){
		if(error){
			console.log('[UPDATE ERROR] - ', error.message);
			return;
		}
		fun(result);
	});
	connection.end();
}

// 删除
exports.delete = function(sql, fun){
	connection.query(sql, function(error, result, fields, fields){
		if(error){
			console.log('[DELETE ERROR] - ', error.message);
			return;
		}
		fun(result);
	})
}

// md5加密
var crypto = require('crypto');
exports.md5 = function(str,key){
	var decipher = crypto.createHash('md5',key)
	if(key){
  		return decipher.update(str).digest()
	}
	return decipher.update(str).digest('hex')
}