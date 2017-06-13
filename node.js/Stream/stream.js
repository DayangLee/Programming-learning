/* 从流中读出数据 */
var fs = require("fs");
var data1 = '';

// 创建可读流
var readerStream = fs.createReadStream('../note.txt');

// 设置编码为 utf8
readerStream.setEncoding('utf8');

// 处理流事件 --> data, end, and error
readerStream.on('data',function(chunk){  // 当有数据可读时触发data
	data1 += chunk;
});

readerStream.on('end', function() {  // 没有更多的数据可读时触发end
	console.log(data1);
});

readerStream.on('error', function(err){  // 在接收和写入过程中发生错误时触发error
	console.log(err.stack);
});

console.log("从流中读出数据执行完毕");


/* 写入流 */
var data2 = 'Hello DayangLee';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('../output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data2,'utf8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, finish and error
writerStream.on('finish', function(){  // 所有数据已被写入到底层系统时触发
	console.log('写入完成。');
});

writerStream.on('error',function(err){
	console.log(err.stack);
});

console.log("写入流执行完毕");