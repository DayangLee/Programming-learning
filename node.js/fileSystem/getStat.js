// fs.stat(path, callback)
// path - 文件路径。
// callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
var fs = require("fs");

console.log("准备打开文件！");
fs.stat('input.txt', function (err, stats) {
	if (err) {
		return console.error(err);
	}
	console.log(stats);
	console.log("读取文件信息成功！");

	// 检测文件类型
	console.log("是否为文件(isFile) ? " + stats.isFile());
	console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
});