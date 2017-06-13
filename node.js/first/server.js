var http = require('http');    //使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http

//使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 2222 端口。 
//函数通过 request, response 参数来接收和响应数据。
http.createServer(function(request,response){
	// 发送HTTP头部
	// HTTP状态值：200 OK
	// 内容类型： text/plain
	response.writeHead(200,{'Content-Type': 'text/plain'});

	// 发送响应数据
	response.end('Hello world!');
}).listen(2222);

// 终端打印信息
console.log('Server running at http://127.0.0.1:2222/');