//10818번
//평균

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n = input[0].split(' ').map(Number);
let arr  = input[1].split(' ').map(Number);
const m = Math.max.apply(null, arr);
let sum =0;
for (i=0; i<arr.length; i++ ){
    let x = arr[i]/m * 100
    
    arr[i] = x;
    
    sum += x;
}

console.log(sum/n);

