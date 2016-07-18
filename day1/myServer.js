/*
웹서버 구축
서버구축을 위해 내장 모듈인 http모듈 사용
*/


var http=require("http");
var fs = require("fs");


//http 모듈의 createServer()메소드를 호출시 server 객체 반환
var server = http.createServer(function(request,response){
	
	response.writeHead(200,{
	 //클라이언트의 브라우저에 보내게 될 요청 헤더정보
	 //200은 웹서버 요청시 성공으로처리했다는 응답코드.
			"content-type":"text/html;charset=utf-8"
	});

	var data = fs.readFileSync("16일차.html","utf8");

	response.end(data);

	
});


//server start
server.listen(9999,function(){
	console.log("서버가 9999번에서 실행중..");
});