// 2839번
// 설탕 배달

// N 킬로그램 설탕을 배달해야 하는데 봉지느 3,5킬로그램 봉지가 있다
// 설탕 배달을 해야할때 봉지(가장 적은 수의 봉지) 몇개를 가져가면 되는지 그 수를 구하는 프로그램을 작성
// 정확한 킬로그램으로 떨어지지 않는 경우는 -1 출력
// n이 5로 나누어 떨어지는 경우와 n이 남을 경우를 조건문으로 찾아서 출력하고
// 그렇지 않을 경우 반복문으로 n을 -3 하여 줄여나간다.

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString();

let n = parseInt(input);
let five = 0;
let three = 0;

while(true){
    if(n%5 ===0){
        five = n/5;
        console.log(five + three);
        break;
    }
    if(n<0){
        console.log(-1);
        break;
    }
    n = n-3;
    three++;
}






