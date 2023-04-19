// 2581번
// 소수
// 자연수 M이상 N 이하의 자연수 중 소수인 것을 골라서 이들의 합과 최솟값을 찾는 프로그램 작성
// 소수 판별 함수를 사용해서 반복문을 돌려서 배열에 소수 저장
// 소수가 없을 경우 첫째 줄에 -1을 출력하기위해
// 빈배열일 경우 배열의 길이가 0이면 -1을 출력


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

let m = input[0];
const n = input[1];

let arr = [];

// 소수 판별 함수
function isPrime(num){
    if(num < 2) return false;
    if(num === 2) return true;

    for (let i =2 ; i< num; i++){
        if(num %i === 0){
            return false;
        }
    }
    return true;
}


for(i = m; i <=n ; i++){
    
    if(isPrime(i) === true){
        arr.push(i);
    }

}
let sum = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0);
if (arr.length === 0){
    console.log(-1)
}else{
    console.log(sum);
    console.log(Math.min.apply(null, arr));
}