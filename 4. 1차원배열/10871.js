//10871번
// x 보다 작은 수 


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const line1 = input[0].split(' ');
const n = Number(line1[0]);
const x = Number(line1[1]);
// 값이 숫자로 인식하도록 해야됨
let arr = input[1].split(' ');
let result = '';
for(i= 0 ; i<n ; i++ ){
    if (arr[i] < x){
        result += arr[i]+' ';
    }
    
}
console.log(result);



// let arr = input[1].split(' ');


// const result = arr.filter((value) => value < x)

// console.log(result);


