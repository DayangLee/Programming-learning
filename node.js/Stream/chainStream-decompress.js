var fs = require("fs");
var zlib = require('zlib');

// 解压 readerStream.txt.gz 文件为 readerStream1.txt
fs.createReadStream('../readerStream.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('../readerStream1.txt'));
console.log("文件解压完成。");