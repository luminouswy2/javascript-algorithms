// 11650번
// 좌표 정렬하기

// map() 함수와 sort() 함수에 대하여 좀더 공부할 필요성이있음 유튜브 찾아보기
// 내일 다시 할것 문제 보니 x 가 먼저 이고 같으면 y 
// 11651번도 볼것



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.shift();

// 아래 반복문을 한 줄로 할수 있는 코드
// const location = input.map(v=>v.split(' ').map(x=>+x));

let arr = []
for(i=0; i<input.length; i++){
    let temp = input[i].split(' ').map(Number);
    arr.push(temp);
}

// 인공지능에 물어본 코드 잘됨
let answer = arr.sort((a,b) =>{
    if(a[0] !== b[0]){
        return a[0]-b[0];
    }else {
        return a[1]-b[1];
    }
}); 


// 검색으로 본 코드지만 이해가 잘안되는 코드

// const answer = arr.sort((a,b) =>{
//     if(a[0]> b[0]){       
//         return 1;
//     }else if(a[0]<b[0]){
//         return -1;
//     }else{
//         return a[1]-b[1];
//     }
// })

console.log(answer.map(v=>v.join(' ')).join('\n'));

// console.log(location);





// 틀렸다고 나왔지만 어디가 틀린지 모르겠음
// 문제를 잘못 이해하고 있었음 .
// x 좌표가 같을때 y좌표가 증가하는 순서는 고려 안되어 있음 

// let arrx = [];
// let arry = [];

// for(i=0; i<input.length; i++){
//     const [x, y] = input[i].split(' ').map(Number); 
//     arrx.push(x);
//     arry.push(y);
    
// }
// arrx.sort((a,b) => a-b);
// arry.sort((a,b) => a-b);

// for(let i=0; i<input.length; i++){
//     console.log(arrx[i],arry[i]);
// }





