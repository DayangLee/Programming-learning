/*
在浏览器JavaScript 中，通常window 是全局对象， 
而Node.js 中的全局对象是 global，
所有全局变量（除了 global 本身以外）都是 global 对象的属性。
 */
console.log(this);  // {}

/*
__filename 表示当前正在执行的脚本的文件名。
它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 
如果在模块中，返回的值是模块文件的路径。
 */
console.log(__filename); // C:\Users\HP\Desktop\node-demo\globalObject\globalObject.js

/*
__dirname 表示当前执行脚本所在的目录。
 */
console.log(__dirname); // C:\Users\HP\Desktop\node-demo\globalObject


function printHello(){
	console.log('hello LJY');
};
var t1 = setTimeout(printHello,2000);
// clearTimeout(t1);

var t2 = setInterval(printHello,3000);
setTimeout(function(){
	clearInterval(t2);
},10000);


console.info("程序开始执行：");
var counter = 10;
console.log("计数: %d", counter);
console.time("获取数据");
console.timeEnd('获取数据');
console.info("程序执行完毕。");