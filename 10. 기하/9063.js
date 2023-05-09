// 9063번
// 대지

// 주어진 좌표에서 x축과 y축의 최소,최댓값을 찾아서 그 사각형의 넓이를 구하라는 문제
// 결국 각 축의 최댓값에서 최소값을 빼고 둘을 곱하면 되는 간단한 문제


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = Number(input[0]);
let arrx = [];
let arry = [];

for(i= 1; i<=n; i++){
    let [x,y] =input[i].split(' ').map(Number);
    arrx.push(x);
    arry.push(y);
    
}
const minx = Math.min.apply(null, arrx)
const maxx = Math.max.apply(null, arrx)
const miny = Math.min.apply(null, arry)
const maxy = Math.max.apply(null, arry)
console.log((maxx-minx) * (maxy-miny));

