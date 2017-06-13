/* fs是filesystem的缩写，该模块提供本地文件的读写能力。
 这个模块几乎对所有操作提供异步和同步两种操作方式，供开发者选择。
*/
var fs = require('fs');

// readFileSync方法用于同步读取文件，返回一个字符串。
var data1 = fs.readFileSync('../note.txt');
var data2 = fs.readFileSync('../note.txt','utf8');
console.log(data1);
console.log(data1.toString());
console.log(data2);
console.log('同步执行结束！');