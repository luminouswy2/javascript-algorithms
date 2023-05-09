// 10798번
// 세로 읽기
// 주어진 입력값을 세로로 읽어서 출력



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// 위에서 받아온 input 배열을 그냥 사용할 경우
//[ 'AABCDD\r', 'afzz\r', '09121\r', 'a8EWg6\r', 'P5h3kx' ]
// \r 개행문자 때문에 빈칸이 발생하면서 개행문자 있는 부분에서 문자열 출력이
// 제대로 이루어 지지 않음( 다른 사람들의 코드를 불러와도 안됨, 제출은됨) 
// 그래서 처음부터 다시 배열을 받아와서 문자열 변환 후 \r을 제거한 후 다시 배열로 변환..


let arr = []
for(i= 0; i< input.length; i++){
    let str = input[i].trim();
    let temp =[...str];    
    arr.push(temp);
}


// const input = [
//     ['A','A','B','C','D','D'],
//     ['a','f','z','z'],
//     ['0','9','1','2','1'],
//     ['a','8','E','W','G','6'],
//     ['P','5','h','3','k','x']
// ]


// function solution(){

//     return
// }



const maxLength = Math.max.apply(null, arr.map(i =>i.length));


let vertical = "";
for (let i=0; i<maxLength; i++) {
    for (let j=0; j<arr.length; j++) {
        vertical += arr[j][i] || "";
    }
}
console.log(vertical);