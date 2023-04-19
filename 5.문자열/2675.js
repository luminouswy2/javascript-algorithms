//2675번
//문자열 반복
// 문자열 S를 입력 받은 후 각 문자를 R번 반복하여 새문자열P를 만든후 출력
// S를 하나씩 나눠서 repeat()함수를 활용하여 r번 반복후 변수에 담아서 출력

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const t = input[0];


for(i = 1 ; i <= t; i++){
    let [r, s] = input[i].split(' ');   
    s = s.split('');    
  
    let p = []
    for(let j=0; j < s.length ; j++){
        p.push(s[j].repeat(r));
               
    }
    console.log(p.join(''));   
}

    
    
    