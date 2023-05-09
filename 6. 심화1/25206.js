// 25206번
// 전공학점 계산
// split('n')줄바꿈 해서 생성된 \r 때문에 마지막 입력값을 trim()으로 다시 없애야됨

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const grade = {
'A+' : 4.5,
'A0' : 4.0,
'B+' : 3.5,
'B0' : 3.0,
'C+' : 2.5,
'C0' : 2.0,
'D+' : 1.5,
'D0' : 1.0,
'F'  : 0.0
}
let sum1 = 0;
let sum2 = 0;

for(i=0 ; i<input.length; i++){
    const str = input[i].split(' ');
    const grades = parseInt(str[1]);
    const rateing = str[2].trim();
   
    for(let x in grade){
       if(x === rateing){
            sum1 += grade[x] * grades;           
            sum2 += grades;
       }
    }
    
}


console.log(sum1/sum2);