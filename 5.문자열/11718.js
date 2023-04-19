//11718번
//그대로 출력하기



const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');


for(i = 0 ; i < input.length ; i++){
    console.log(input[i]);
}



