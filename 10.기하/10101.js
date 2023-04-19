// 10101번
// 삼각형 외우기

// 삼각형의 세각을 입력받은다음 거기에 맞게 출력


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const sum = input[0] + input[1] + input[2];

if (input[0] === input[1] && input[1]=== input[2] && input[0] === input [2]){
    console.log('Equilateral');
}else if(sum === 180 && input[0] === input[1] || input[1]=== input[2] || input[0] === input [2] ){
    console.log('Isosceles');
}else if(sum === 180 && input[0] != input[1] && input[1] != input[2] && input[0] != input [2]){
    console.log('Scalene');
}else{
    console.log('Error')
}

// 보기 좋은 코드
const answer = input => {
    const sum = input.reduce((acc, cur) => acc + cur);
  
    if(sum !== 180) return 'Error';
    
    const set = new Set(input)
  
    if(set.size === 1) return 'Equilateral'
    if(set.size === 2) return 'Isosceles'
    if(set.size === 3) return 'Scalene'
  }
  