//10952번


const fs = require('fs');


const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const t = input.length;

for(i = 0 ; i < t; i++){
    const m = input[i].split(' ');
    const a = Number(m[0]);
    const b = Number(m[1]);

    if( a == 0 && b == 0){
        break;
    }
    console.log( a + b);
}

