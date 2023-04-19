// 1193번 
// 분수찾기
// 주어진 분수값을 보기좋게 변경
// 1/1
// 1/2 2/1
// 3/1 2/2 1/3
// 1/4 2/3 3/2 4/1
// 5/1 4/2 3/3 2/4 1/5
// 각 줄을 그룹으로 정해서 n번째 그룹이 짝수일 분모는 1 ... n(오름차순), 분자는 n ...1 (내림차순)
// n번째 그룹이 홀수이면 분모는 내림차순 분자는 오름 차순


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

let x = input;
let groupNum = 0;

while(x > 0){
    groupNum ++;
    x = x- groupNum;
}

// 오름차순은 groupNum + x , 내림차순은 1 + -x

if ( groupNum % 2 === 0 ){
    console.log(`${groupNum + x}/${1 + -x}`);
}else {
    console.log( `${1 + -x}/${groupNum+x}`);
}



