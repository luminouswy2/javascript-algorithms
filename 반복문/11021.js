//11021번

const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const t = Number(input[0]);
let result = '';

for(i= 1; i <= t ; i++){
    let m = input[i].split(' ');
  
    let a = Number(m[0]);
    let b = Number(m[1]);
   
    result += `Case #${i}: ${a} + ${b} = ${a+b} \n`;
    
}
console.log(result);