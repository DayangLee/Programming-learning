function Hello(){
	var name;
	this.setName = function(thisName){
		name = thisName;
	};
	this.sayHello = function(){
		console.log('Hello ' + name + ' !');
	};
};
module.exports = Hello;