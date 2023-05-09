// 2903번
// 벌집
// 육각형으로 이루어진 벌집
// 증가하는 범위 1, 2~7(1+6*1),8 ~ 19(7+6*2), 20 ~ 37 (19+6*3)
// 방넘버(num + 6*range)가 입력값(input) 작을 경우 range를 하나씩 추가   

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let range = 1;
let num =1;

while(num < input){
    num += 6*range;

    range ++;

}

console.log(range);

