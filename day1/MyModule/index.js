/*
node Js에서 개발자가 객체를 정의가능
특히 node Js 에서는 저장된 파일을 모듈이라 함
*/

exports.getRandom=function(r){

	return parseInt(Math.random()*r);
}

exports.getExtend = function(path){
	
	var filename = path.substring(path.lastIndexOf("\\")+1,path.length);
	
	return filename.split(".")[1];
}