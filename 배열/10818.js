//10818번
// x 보다 작은 수 
//Math.min 또느 Math.max 함수는 배열을 넘기면 NaN이 나옵
//배열이 아니라 고유한 변수를 기대하기 때문에 그그럼
// Math.main.apply(Math, 변수);를 사용
// ...변수 를 사용해서 해도됨(전개연산자: 객체 혹은 배열들을 펼칠 수 있게 해줌)


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n =Number(input[0]);
let arr = [];
arr = input[1].split(' ');


// let min =Math.min.apply(Math, arr);
// let max =Math.max.apply(Math, arr);

let min =Math.min(...arr);
let max =Math.max(...arr);


console.log(min, max);


