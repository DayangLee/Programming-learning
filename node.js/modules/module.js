var Hello = require('./helloModule');  // node.js默认后缀为js
var hello = new Hello();
hello.setName('LJY');
hello.sayHello();  // Hello LJY !