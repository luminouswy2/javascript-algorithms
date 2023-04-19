// 2331번
// 분해합
// 어떤 자연수 N이 있을때 N+(N의 각자리수 의 합 예: 245+2+4+5 =256)
// n은 생성자, 256의 분해합이라고 한다.
// 어떤수 가 주어졌을때  주어진 수의 가장 작은 생성자를 구해내는 프로그램을 작성

// 문제이해부터 잘 안되는 문제
// 입력값이 216이며 216의 생성자를 구해내면 되는 문제
// n + (각 자리수의 합) = 216일때 가장 작은 n 을 구하면 된다.

//1. 216이 세자리 숫자이기 때문에 각자리수가 최대 9라고 예상하면
// 3*9를 해서 216에서 27을 뺀 수 부터 216까지 반복문을 돌린다.
// 반복문 i를 문자열로 변경하여 split로 각 자리수를 잘라서 배열로만든다.
// 그후 배열을 더한것과 i를 더해서 n 과 같은 값을 찾아서 그중에 가장 작은수를 출력


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim();

const n = Number(input);


let startn = n - (String(n).length * 9); 
let result = [];

for(i=startn; i< n; i++){
    let arr = String(i).split('').map(Number);
    let sum = arr.reduce((a,el) => (a+el));
    sum =Number(sum);
    
    if(sum+i === n){
        result.push(i);        
    }  
}
if(result.length === 0){
    console.log(0);

}else{
    console.log(Math.min(...result));
}





