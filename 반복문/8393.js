// 8393번 문제 
// 합 n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오

const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');

const n = Number(input[0]);

function factorial(n) {
    let result =0;
    for (let i =1; i <=n ; i++){
        result += i;
    }
    return result
}

console.log(factorial(n));