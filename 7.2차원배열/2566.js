// 2566번
// 최댓값
// 주어진 2차원 배열에서 최댓값을 구하고 인덱스를 반환
// 주어진 입력값을 2차원 배열로 만들어서
// 배열을 반복문으로 돌려서 맥스 값을 찾은후 값과 위치 i,j를 출력


// const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
// const input = fs.readFileSync(file).toString().trim().split('\n');

let [...arr] = require("fs")
    .readFileSync(file)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));

let max = 0;
let y = 0;
let x = 0;
for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++) {
        if(max <arr[i][j]){
            max = arr[i][j];
            y = i;
            x = j;
        }        
    }
}

console.log(max);
console.log(y+1, x+1);