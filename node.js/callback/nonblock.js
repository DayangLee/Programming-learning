/* fs是filesystem的缩写，该模块提供本地文件的读写能力。
 这个模块几乎对所有操作提供异步和同步两种操作方式，供开发者选择。
*/
var fs = require('fs');

// readFile方法用于异步读取数据。
fs.readFile('../note.txt', function(err,data){
	if(err)
		return console.error(err);

	console.log(data);
	console.log(data.toString());
});
fs.readFile('../note.txt', 'utf8',function(err,data){
	if(err)
		return console.error(err);

	console.log(data);
});


console.log('异步执行结束！');