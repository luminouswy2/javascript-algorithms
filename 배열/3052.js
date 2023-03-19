//3052번
// 42로 나눈 나머지를 구하고 값이 다른 나머지값의 수를 출력
// indexOf함수(배열에 같은 값이 없으면 -1을 반환)를 활용하여 같은 값없을 경우 배열에 푸쉬

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n = input.map(Number);

let arr =[];

for (i = 0 ; i < n.length; i++){
    let result = n[i]%42;
    
    if( arr.indexOf(result) === -1 ){
        arr.push(result);
    }
    

}
console.log(arr.length);