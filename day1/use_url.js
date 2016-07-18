/*
내장 객체중 URL 실습
*/

var url = require("url");

//특정 데이터를 추출하는 과정==> 파싱
//url 객체의 parse 메소드는 지정한 url 정보해석후 json형태의 객체를 반환
var obj = url.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548583&isYeonhapFlash=Y").search;

console.log(obj);