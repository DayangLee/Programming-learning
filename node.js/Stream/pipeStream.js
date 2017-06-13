var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('../readerStream.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('../writerStream.txt');

// 管道读写操作
// 读取 readerStream.txt 文件内容，并将内容写入到 writerStream.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");