/*
http 내장모듈로 웹서버 구축하기엔 부족
express 모듈을 사용한 웹서버 구축
#express: 웹서버 구축에 필요한기능을 http모듈에 추가된 외부모듈
				http와 express 두 모듈 사용해야함.
*/

var http = require("http");
var express = require("express");
var fs = require("fs");
var mysql=require("mysql");
var bodyParser = require("body-parser");

//ejs : html문서내의 javascript가 가능함.
var ejs = require("ejs");


//express 모듈로 부터 application 객체를 생성.
var app=express();

app.use(bodyParser.json());//json지원
app.use(bodyParser.urlencoded({extended:true}));//form태그 전송시 속성지정.

var client = mysql.createConnection({ //mysql접속.
	"url":"localhost",
	"user":"root",
	"password":""
});

client.query("use iot"); //사용할 DB선택

/*
app.use(function(request, response){
	//요청에 대한 응답처리.
	//app.use() 안에 미들웨어라 불리는 각종 express지원함수가 사용할수있다.
	response.writeHead(200,{"content-type":"text/html; charset=utf8"});
	//response.end("express 모듈로 구축한 서버의 응답");


});
*/

//게시물 목록보기
app.route("/list").get(function(request,response){
	var page = fs.readFileSync("./list.html","utf8"); //list.html를 담음

	client.query("select * from student",function(error,records){
		if(!error){
			console.log(records);
			response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
			response.end(ejs.render(page,{dataList:records}));//Client에게 응답
			//ejs.render()는 2번째 인수로 전달한 객체를 
			//렌더링 대상이되는 html에 자동전달.
		}else{
			console.log("이거슨 ERROR");
		}
	});
	
});

//get방식으로 요청시 동작.
app.route("/regist_form").get(function(request, response){
	var data = fs.readFileSync("./regist_form.html","utf8");
	response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
	response.end(data);
}); 

//client가 등록시
app.route("/regist").post(function(request, response){
	//client가 보낸 데이터를 받음

	var data = request.body;

	var id = data.id;
	var pwd = data.pwd; 
	var name =data.name;

	console.log("ID=>>"+id);
	console.log("Password=>>"+pwd);
	console.log("Name=>>"+name);

	//받은 데이터를 데이터베이스에 넣기.
	client.query("insert into student(id,pwd,name) values('"+id+"','"+pwd+"','"+name+"')",function(error,records,field){ //성공 & 실패 여부 확인.
		if(error){
			console.log("등록실패");
		}else{
			console.log("등록성공");

			//리스트 페이지에 대한 요청.
			response.redirect("/list");
		}
	
	});
});

//상세보기 요청

app.route("/detail/:id").get(function(request, response){
	var detail = fs.readFileSync("./detail.html","utf8");
	console.log("유저가 선택한 ID>>>>"+request.params.id);
	client.query("select * from student where id='"+request.params.id+"'",function(error,records){
		if(!error){
			console.log(records);
			response.writeHead(200,{"Content-Type":"text/html; charset=utf8"});
			response.end(ejs.render(detail,{obj:records}));//Client에게 응답
		}else{
			console.log("이거슨 찾을수없는 것");
		}
	});
	
	
});

//서버구동시작
var server = http.createServer(app);
server.listen(8383,function(){

	console.log("Server is running at 8383..");
});
