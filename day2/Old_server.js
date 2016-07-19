/*
node.js 는 서버를 직접 코드로 작성
*/


//http모듈 생성
var http=require("http");
//파일 내용을 읽어들이는 내용 모듈.
var fs = require("fs");



//서버객체생성
var server = http.createServer(function(request,response){
	response.writeHead(200,{"content-type":"text/html;charset=utf8"});

	console.log(request.url);

	if(request.url!="/favicon.ico"){
		var data = fs.readFileSync("."+request.url,"utf8");
	}
	response.end(data);//end()의 인수에 사용자가 받게될 문자열을 넣을수 있다.

	
	/*
	if(request.url=="/green.html"){
		//클라이언트가 green.html의 내용을 원할때
		console.log("THIS GREEN");
	}else if(request.url=="/yellow.html"){
		//클라이언트가 yellow.html의 내용을 원할때.
		console.log("THIS YELLOW");
	}*/
});
//서버가동
server.listen(8383,function(){
	console.log("Server is running at 8383...");
});