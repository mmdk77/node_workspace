/*
내장 모듈 중 FileSystem 모듈 학습
fs 내장 모듈은 파일을 읽어들여 그데이터를 반환해준다.
*/

var fs = require("fs");

var sss=fs.readFileSync("data.txt","utf-8");
//sync =>동기화 처리가 끝날때까지 실행부가 아무것도 못하고 기다리는 요청처리

console.log(sss);