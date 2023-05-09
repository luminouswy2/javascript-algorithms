//10813번
//공 바꾸기

//배열 변환 방법[arr1, arr2] = [arr2, arr1] 

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n = Number(input[0].split(' ')[0]);
const m = input[0].split(' ')[1];

let basket = new Array(n).fill().map((v,i) => i+1);

for(i=1; i <= m ; i++){
    basketNum = input[i].split(' ').map(Number);
    num1 = basketNum[0];
    num2 = basketNum[1];
   
    [basket[num1-1], basket[num2-1]] = [basket[num2-1], basket[num1-1]];
  
}


console.log(basket.join(" "));