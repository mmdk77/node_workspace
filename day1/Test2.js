/*
node.Js는 JS이지만 기존 JS에 없는 기능들이 있다.
그중 전역변수와 전역함수에 대한 학습내용.

__filename: 현재 실행하고 있는 파일의 완전한 경로.
__dirname: 현재 실행하고 있는 파일의 디렉토리 경로
*/

console.log("__filename은"+__filename);
console.log("__dirname은"+__dirname);

var path = __filename;
var filename = path.substring(path.lastIndexOf("\\")+1,path.length);

console.log("파일명="+filename);


console.log(filename.split("."));

