/*
nodeJs가 지원하는 내장객체 학습

console *항상 사용 // 출력과 관련된 기능을 지원*
process // 현재 실행중인 프로세스정보
exports *중요* // 외부 모듈을 가져올때 사용

console.time('100-elements');
for (var i = 0; i < 10000000000; i++) {
  ;
}
console.timeEnd('100-elements');
*/


console.log(process.env.os);
console.log(process.version);

