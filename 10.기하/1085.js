// 1085번
// 직사각형에서 탈출

// 한수는 지금 (x,y)에 있다. 직사각현은 각 변이 좌표축에 평행하고,
// 왼쪽 아래 꼭짓점은 (0,0), 오른쪽위 꼭짓점은(w,h)에 있다.
// 직사각형의 경계선까지 가는 거리의 최솟값을 구하는 프로그램을 작성하시오
// 입력 첫째줄에 x,y,w,h가 주어진다.

// 가장 가까운 경계로 이동 하려면 x,y,w-x,h-y 의 값을 구해서 가장 작은 수가 최솟값

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [x,y,w,h] = input;


console.log(Math.min(x,y,w-x,h-y));
