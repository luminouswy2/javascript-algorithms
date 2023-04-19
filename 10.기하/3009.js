// 3009번
// 네 번째 점

// 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한
// 네 번째 점을 찾는 프로그램을 작성하시오

// 세점의 좌표가 한 줄에 하나씩 주어진다.

// 좌표를 보면 축별로 한개만 다른 것을 찾아내면된다.


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let arrx = [];
let arry = [];
let x,y;

for (i=0; i<input.length; i++){
    arrx.push(Number(input[i].split(' ')[0]));
    arry.push(Number(input[i].split(' ')[1]));    
}

// 정렬해 줘서 한쪽으로 같은 숫자가 몰리게 만듬
arrx = arrx.sort();
arry = arry.sort();

// 작은 숫자가 같으면 마지막 숫자가 출력되고, 다르면 첫번째 숫자가 출력되게 함
x = arrx[1] === arrx[0] ? arrx[2] : arrx[0];
y = arry[1] === arry[0] ? arry[2] : arry[0];

console.log(x, y);
