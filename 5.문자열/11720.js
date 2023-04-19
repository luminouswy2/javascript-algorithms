//11720번
// 숫자의 합
//

const input =[
'5',
'54321'
]
    
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let sum =0;
let num = input[1].split('').map(Number);


for(i=0; i < n; i++){
    
    sum += num[i];
    
}

console.log(sum);
    
    
        