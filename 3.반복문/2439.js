//2439번
//별 찍기 , 반대로 출력

const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const t = Number(input[0]);

for (let i=0 ; i< t; i++){
    let result = '';

    for(let j= t-1 ; j >= 0 ; j--){
        result += j > i ? ' ' :'*';
       
    }
    console.log(result);
}


// let arr = new Array(t).fill(' ');


// for(i = t-1 ; i >= 0 ; i--){
    
//     arr[i] += "*";
//     console.log(arr);
// }
