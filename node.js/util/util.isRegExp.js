// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
var util = require('util');

console.log(util.isRegExp(/some regexp/)); // true
console.log(util.isRegExp(new RegExp('another regexp'))); // true
console.log(util.isRegExp({})); // false