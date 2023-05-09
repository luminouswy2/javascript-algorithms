//9086번
//문자열의 첫글자와 마지막 글자 출력
// 문자열의 첫 시작은 0, 마지막 부분은 글자의 길이출력해서 -1 해서 구함
//그 외 substring() 활용해도 됨, 사용법 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.

const input =[
'3',
'ACDKJFOWIEGHE',
'O',
'AB',
]

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = input[0];

for(i=1; i <= t; i++){
    
    let End = input[i].length -1 ;
  
    console.log(input[i].charAt(0) + input[i].charAt(End));
}

    
    
    