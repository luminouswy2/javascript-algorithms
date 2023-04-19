// 15894번
// 수학은 체육과목입니다.

// 한번의 길이가 1인 정사각형을 피라미드 형식으로 붙여 나가면
// 가장 아랫부분의 정사각혀이 n개 일때 전체 도형의 둘레의 길이를 구하시오

//간단한 문제 사각형 둘레의 길이는 밑변(n) x 변의 수(4)
//input에 .split('') 하면 뒤에 하나 남는지 오류나서 안됨


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim();

const n = Number(input);

console.log(n * 4);
