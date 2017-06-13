var fs = require("fs");
var zlib = require('zlib');

// 压缩 readerStream.txt 文件为 readerStream.txt.gz
fs.createReadStream('../readerStream.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('../readerStream.txt.gz'));

console.log("文件压缩完成。");