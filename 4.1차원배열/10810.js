//10810번
//공넣기

// Number 와 parseInt 차이
// Number는 소수점까지 숫자타입으로 가져올 수 있음
// parseInt는 문자열에서 숫자만 추출 가능

//1. 먼저 

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n = Number(input[0].split(' ')[0]);
const m = input[0].split(' ')[1];

let basket = new Array(n).fill(0);


for(i=1; i <= m; i++){
    let a = input[i].split(' ').map(Number);
    let from = a[0];
    let to = a[1];
    let ballNum = a[2];

    
    console.log(basket);
    for(j = from-1 ; j < to ; j++){
      basket[j] =ballNum;
      
    }  

}


console.log(basket.join(" "));