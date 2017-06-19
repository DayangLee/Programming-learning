// 如果给定的参数 "object" 是一个数组返回true，否则返回false。
var util = require('util');

console.log(util.isArray([]));  // true
console.log(util.isArray(new Array));  // true
console.log(util.isArray({}));  // false