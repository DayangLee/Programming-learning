//如果给定的参数 "object" 是一个日期返回true，否则返回false。
var util = require('util');

console.log(util.isDate(new Date())); // true
console.log(util.isDate(Date())); // false
console.log(util.isDate({})); // false