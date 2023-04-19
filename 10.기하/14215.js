// 14215번
// 세 막대

// 주어진 세 수의 가장 긴 둘레를 구하는 문제
// 막대의 길이는 마음대로 줄일 수 있다.
// 결국 삼각형이 성립되는지 확인해야함
// a,b,c가 변의 길이이고 c가 제일 긴 길이이면
// c < a+b 가 성립되면 삼각형이됨
// 성립이 안되면 c= a+b에 -1 해주면 끝

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

input.sort((a,b)=>a-b);
const a = input[0];
const b = input[1];
const c = input[2];

if(c >= a+b){
    console.log(a+b+(a+b-1) );
}else{
    console.log(a+b+c);
}
