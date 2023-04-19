// 11005번
// 진법 변환
// 

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const N = parseInt(input[0]);
const B = parseInt(input[1]);

let answer = [];
let tmp = N

while(tmp !==0){
    answer.push(tmp%B);
    tmp = Math.floor(tmp/B);
}
answer =answer.reverse();
for (i=0; i<answer.length; i++){
    if(answer[i]>=10 && answer[i]<=35){
        answer[i] = String.fromCharCode(answer[i]+55);
    }
}
console.log(answer.join('').trim());





// {10진수}.toString('변경하고자 하는 진수') 간단하게 구현 가능
// console.log(N.toString(B).toUpperCase());

