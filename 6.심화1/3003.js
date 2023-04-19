//3003번
//체스?
//피스 총 16개 킹1, 퀸1, 룩2, 비숍2, 나이트2, 폰8개로 구성
//검은색은 모두 있지만 흰색이 몇개 없음

const piece = [1, 1, 2, 2, 2, 8];


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');

let arr = [];
// for(i=0 ; i < piece.length; i++){
//     arr.push(piece[i] - input[i]); 
// }

// map 함수를 활용하여 더 간단하게 표현 piece 배열의 ele 요소를 inpu[i] 요소로 빼서 배열로 만듬
arr = piece.map((ele, i) => ele - input[i]);

console.log(arr.join(' '));