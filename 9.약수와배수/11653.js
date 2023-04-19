// 11653번
// 소인수분해

// 정수 N이 주어졌을때 소인수분해하는 프로그램을 작성하시오
// 입력값을 2부터 나눠서 입력값이 1이되면 정지



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);


let n = input[0];
let arr = [];

for(i =2; i<= n; i++){
    while(n % i === 0){
        n /= i;
        arr.push(i);        
    }
    if( n === 1) break;
}


console.log(arr.join('\n'));