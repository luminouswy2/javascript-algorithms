// 11478번
// 서로 다른 부분 문자열의 개수

// 문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 구하는 프로그램



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim();

// n  가지고 있는 카드의 수
const n = input;

const set = new Set();

//아래 코드로 모든 경우의 수를 추출 
// i=0, j=0,1,2,3,4
// i=1, j=1,2,3,4
// i=2, j=2,3,4
// i=3, j=3,4
// i=4, j=4
for(let i=0; i< input.length; i++){
    for(let j = i; j< input.length; j++){
        
        //substring(시작위치, 종료위치) 시작위치에서 종료위치까지 문자열을 자름
        set.add(input.substring(i, j+1))
    }
}

console.log(set.size);