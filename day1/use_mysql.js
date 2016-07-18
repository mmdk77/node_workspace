/*
node.js를 이용시, 자바스크립트에서도 데이터베이스연동 프로그래밍 가능

내장 모듈로 해결되지않은 부분은 외부 모듈을 추가 하여 개발. ==> Node.js
*/

var mysql=require("mysql");

//접속시도
var client = mysql.createConnection({
	"url":"localhost",
	"user":"root",
	"password":""
});

//사용할 데이터베이스 선택
client.query("use iot");

//데이터값 넣기
client.query("insert into student(id,name,pwd) values('superman','1234','클라크')");