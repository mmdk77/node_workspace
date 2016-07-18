/*
node.js 내장객체 중 query 내장모듈를 학습.
*/

var url=require("url");
var query = require("querystring");

var result = query.parse(url.parse("http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0008548934&isYeonhapFlash=Y"),true);
console.log(result);