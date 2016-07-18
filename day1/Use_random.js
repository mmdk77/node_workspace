/*
외부의 필요한 모듈을 사용하기위한 require 함수안에
필요한 모듈명을 명시.
*/

var mm=require("./MyModule");


var p = mm.getExtend(__filename);

console.log(p);

function test(){
	var r = mm.getRandom(5);
	console.log(r);

	setTimeout(function(){
		test();
	},500);

}

test();