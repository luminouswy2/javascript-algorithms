// 9506번
//소수 찾기
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성
// 소수 판별 가장 기본적인 방법으로 진행
// 1은 소수가 아니라서 n -1
// 다른 수로 나눠서 떨어지면 소수가 아니기에 n -1


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let n = parseInt(input[0]);
const num = input[1].split(' ').map(Number);


for(i=0; i<num.length; i++){
   if(num[i] ===1){
     n -= 1;
   }
   
   for(j =2; j < num[i] ; j++){
    if(num[i] % j ===0 ){
        n -= 1;
        // 나눠서 떨어지는게 한번만 나오면 되기 때문에 브레이크해줌
        break;
    }
   }
     
}
console.log(n);


