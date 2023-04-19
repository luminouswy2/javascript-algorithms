//10807번
//개수 세기
// 반복문으로 풀면 틀렸다고 나옴, filter함수활용
// 필터 함수 사용법
// let array = [3, 5, 11, 0, 9, 'string']
// #1 solution
// let result =array.filter((value => value < 10)
// #2 solution
// function lessThanTen(value){
//     return value < 10 
// }
// let reult = array.filter(lessThanTen)


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const t = input.length;
const arr = input[1].split(' ');
const v = input[2];

const cnt = arr.filter((ele) => ele == v).length;

console.log(cnt);

// let result = 0;
// for(i=0 ; i < 11 ; i++){
    
//     if(arr[i] == v ){
//         result++ ;
//     }
    
// }
// console.log(result);