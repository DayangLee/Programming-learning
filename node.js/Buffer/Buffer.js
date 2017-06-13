// 创建 Buffer 类
var buf1 = new Buffer(10);
var buf2 = new Buffer([10,20,30,40,50]);
var buf3 = new Buffer('DayangLee','utf-8');

// 写入缓冲区
var len1 = buf1.write('LJY');
console.log("buf1写入字节数 : " +  len1); // 3
len1 = buf1.write('DayangLee');
console.log("buf1写入字节数 : " +  len1); // 9
len1 = buf1.write('Hello DayangLee');
console.log("buf1写入字节数 : " +  len1); // 10

// 从缓冲区读取数据
var buf4 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf4[i] = i + 97;
}

console.log( buf4.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf4.toString('ascii',0,5));   // 输出: abcde
console.log( buf4.toString('utf8',0,5));    // 输出: abcde
console.log( buf4.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

// 将Buffer转为JSON对象
var buf5 = new Buffer('DayangLee');
var json = buf5.toJSON(buf5);

console.log(json);
/* {
		type: 'Buffer',
  		data: [ 68, 97, 121, 97, 110, 103, 76, 101, 101 ]
  	}
*/

// 缓冲区合并
var buffer6 = new Buffer('Hello ');
var buffer7 = new Buffer('DayangLee');
var buffer8 = Buffer.concat([buffer6,buffer7]);
console.log("buffer8 内容: " + buffer8.toString());  // buffer8 内容: Hello DayangLee

var result = buffer6.compare(buffer7);
if(result < 0) {
   console.log(buffer6 + " 在 " + buffer7 + " 之前");
} else if(result == 0){
   console.log(buffer6 + " 与 " + buffer7 + " 相同");
} else {
   console.log(buffer6 + " 在 " + buffer7 + " 之后");
}
// Hello  在 DayangLee 之后

// 拷贝缓冲区
var buffer9 = new Buffer(3);
buffer6.copy(buffer9);
console.log("buffer9 content: " + buffer9.toString()); // buffer9 content: Hel

// 缓冲区裁剪
var buffer10 = buffer8.slice(0,7);
console.log("buffer10 content: " + buffer10.toString()); // buffer10 content: Hello D

// 缓冲区的长度
console.log("buffer10 length: " + buffer10.length); // buffer10 length: 7