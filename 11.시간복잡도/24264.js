// 24264번
// 알고리즘 수업 - 알고리즘의 수행 시간3
// 알고리즘의 수행 횟수와 수행횟수를 다항식으로 나타내었을때
// 최고차항을 알기 위해서는 해당 구문의 for문의 개수 파악을 통해
// 알수 있다.
// for 문이 2개 이고 1에서 n까지 범위 만큼 실행되며 다항식으로 나타내면 n에 해당
//  Big-O 표기법으로 나타내면 O(n^2)이며 직선적 시간 
// 따라서 실행 횟수는 n^2, 다항식의 최고차항은 2이다.

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);


console.log(Math.pow(input,2));
console.log(2);