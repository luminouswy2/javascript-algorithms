// 11651번
// 좌표 정렬하기2

// 11650번 문제와 비슷하지만 반대로 y 좌표부터 증가하고 같으면 x좌표가 증가하는 순서로 구해야함


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


let answer = arr.sort((a,b) =>{
    if(a[1] !== b[1]){
        return a[1]-b[1];
    }else {
        return a[0]-b[0];
    }
}); 




console.log(answer.map(v=>v.join(' ')).join('\n'));

// console.log(location);







