// 2745번
// 진법 변환

// 먼저 입력된 값을 제곱근을 구하는 것에 맞게 reverse()함수를 사용하여 순서를 바꿔줌
// 예 ABCD 이면 D가 제곱근0 이여야함
// 입력 값이 알파벳일 경우 charCodeAt함수를 활용하여 
// 알파벳의 숫자(A일경우 10 , Z일경우 35)를 추출하여 해당진수의 제곱근에 곱해줘야함

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const N = input[0].split('').reverse();
const B = parseInt(input[1]);

let result =0;

for(let i=0; i<N.length; i++){
    if(N[i] >= 'A' &&  N[i] <='Z'){
        N[i] = N[i].charCodeAt(0)-55;
        result += N[i] * Math.pow(B,i);
    }else{
        result +=N[i] * Math.pow(B,i);
    }
}


console.log(result);

// parseInt({n진수},n) 간단하게 구현가능
// console.log(parseInt(N, B));