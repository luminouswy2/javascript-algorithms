// 1018번
// 체스판 다시 칠하기

// 흰색과 검은색이 번갈아 칠해진 8x8 체스판을 입력된 체스판과 비교하는 문제
// 흰색과 검은색 둘다 시작할 수 있기에 두가지의 체스판을 둘다 비교할수 있도록 두개다  배열로 만들어둠
// 체스판을 비교하여 최소 값을 찾는 check() 함수를 만들고
// 그 함수를 다시 입력된 체스판이 증가하는 만큼 비교해주는 반복문을 작성하여 계산

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');



const [n,m] = input[0].split(' ').map(Number);
const arr = [];

// 입력된 체스판을 비교하기 위한 8x8 시작이 White와 Black으로 된 체스판 두개 
let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW']
let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB']

let answer = 64;

// 비교하기 위한 입력된 체스판 만들기
for(i=1; i<=input.length-1 ; i++){
    arr.push(input[i].trim('/r'));
}

// check()함수를 입력된 체크판 크기만큼 비교하기 위하여 반복작업 수행
for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {        
      check(j, i);
    }
  }
  
  
function check(x,y){
    let checkWhite = 0;
    let checkBlack = 0;

    for (let i =y; i< y+8; i++){
        for(let j= x; j<x+8; j++){
            console.log(i,j,x,y);
            if(arr[i][j] !== white[i-y][j-x])
            checkWhite++;
            if(arr[i][j] !== black[i-y][j-x])
            checkBlack++;
        }
    }
    //
    
    
    let min = checkBlack < checkWhite ? checkBlack : checkWhite;

    if(min < answer){
        answer = min;
    }
}

console.log(answer);






