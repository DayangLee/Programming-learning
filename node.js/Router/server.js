var http = require('http');
var url = require('url');

function start(route){
	function onRequest(req,res){
		var pathname = url.parse(req.url).pathname; // url.parse()方法用于解析URL对象，解析后返回一个JSON对象
		console.log('Request for ' + pathname + ' received.');
		route(pathname);

		res.writeHead(200,{"Content-Type": "text/plain"});
		res.write('Hello node.js!');
		res.end();
	}

	http.createServer(onRequest).listen(2333);
	console.log('Server has started.');
};

exports.start = start;