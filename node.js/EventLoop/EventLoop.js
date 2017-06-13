/* 回调函数模式让 Node 可以处理异步操作。但是，为了适应回调函数，异步操作只能有两个状态：开始和结束。
对于那些多状态的异步操作（状态1，状态2，状态3，……），回调函数就会无法处理，你不得不将异步操作拆开，分成多个阶段。
每个阶段结束时，调用下一个回调函数。
为了解决这个问题，Node 提供 Event Emitter 接口。通过事件，解决多状态异步操作的响应问题。
*/

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
	console.log('connected success!');

	// 触发 data_received 事件
	eventEmitter.emit('data_received');
};

// 绑定 connection 事件处理程序
eventEmitter.on('connection',connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received',function(){
	console.log('data received success!');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log('程序执行完毕！');