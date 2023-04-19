//2444번
//별찍기
// 첫 번째 줄부터 2xN-1 전째 줄까지 아래와 같이 별출력 
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// 실행 과정 
// 먼저 한번에 그림을 그릴려고해서 잘안됨
// 1. 먼저 위에 5개를 출력하고 
// 2. 아래 4개는 따로 만들어서 출력
// 3. 공백 칸이 줄어들고, 늘어나게 해야됨 


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');

const n = parseInt(input);

let str = [];

// 위에 다섯개
for(i= 1; i <= n ; i++){
  for(j = 1; j < n+i; j++ ){
    if(j <= n-i){
      str += ' ';
    }else{
      str += '*';
    }    
  }
  str += '\n';
}
// 아래 4개
for(i= n; i > 1; i--){  
  for(j = 1; j < n+i-1; j++ ){
    if(j <= n+1-i  ){
      str += ' ';
    }else{
      str += '*';
    }
  }
  str += '\n';  
}
console.log(str);



