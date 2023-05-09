//10812번
//팰린드롬 인지 확인하기
// 팰린드롬이란 앞으로 해도 우영우 거꾸로 해도 우영우


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('');

const str = input.join('');
const reversed = input.reverse().join('');

if(str === reversed ){
    console.log('1');
}else{
    console.log('0');
}




