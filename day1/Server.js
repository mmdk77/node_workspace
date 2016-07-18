/*
모듈은 개발자가 정의할수도 잇지만 , 이미 node.js 자체적으로 제공되는 모듈이 있다.
*/ 


var http = require("http"); //http 모듈을 사용.

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/html"});
	
	response.end("<marquee>hi</marquee>");
}); //서버모듈 생성.

server.listen("9999",function(){
	console.log("server is running 9999 port ...");
});

