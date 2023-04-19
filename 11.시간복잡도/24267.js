// 24267번
// 알고리즈 수업 - 알고리즘의 수행시간 6
// 반복문에 사용된 범위가 n(n-1)(n-2);

// /6 하는 이유는? 모름 아래는 백준의 댓글 답변
// 거듭제곱의 합 공식을 이용하면 됩니다. 
// Σ(k=1->n) k = n(n+1)/2 이고, Σ(k=1->n) k^2은 n(n+1)(2n+1)/6 입니다.
// 그리고 문제를 수열로 바꾸면 Σ(k=1->n-2) k(n-1-k)로 바꿀 수 있습니다

// BigInt 사용해야함 그냥 하면 틀렸다고 나옴


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const n = BigInt(input[0]);


console.log(`${n*(n-BigInt(1))*(n-BigInt(2))/BigInt(6)}`);
console.log(3);