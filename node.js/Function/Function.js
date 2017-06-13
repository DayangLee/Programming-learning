function sayHello(name) {
	console.log('Hello ' + name + ' !');
};
function execute1(thisFunction,val){
	thisFunction(val);
};
execute1(sayHello,'LJY');  // Hello LJY !

// 通过匿名函数
function execute2(thisFunction, val) {
	thisFunction(val);
};
execute2(function(name){
	console.log('Morning ' + name + ' !');
},'DayangLee');  // Morning DayangLee !