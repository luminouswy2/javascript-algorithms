// 24313번
// 알고리즘 수업 - 점근적 표기1
// O(g(n)) = {f(n) | 모든 n ≥ n0에 대하여 f(n) ≤ c × g(n)인 양의 상수 c와 n0가 존재한다}
//함수 f(n) = a1n + a0, 양의 정수 c, n0가 주어질 경우 O(n) 정의를 만족하는지 알아보자.

//O(n) 정의를 만족하려면 a1n + a0 < cn0 을 만족하여야하며
// 추가로 c >= a1 이어야한다

// 점근적 표기란 ?복잡한 계산을 하지 않고 알고리즘의 수행 시간을 빠르게 분석할 수 있게 돕는 것이 점근적 표기법의 핵심


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');



const [a1, a0 ]= input[0].split(' ').map(Number);
const c = Number(input[1]);
const n = Number(input[2]);



console.log ((a1*n)+ a0 <= c*n && c>=a1 ? 1 : 0);
