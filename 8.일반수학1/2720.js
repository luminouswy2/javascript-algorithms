// 2720번
// 세탁소 사장 동혁
// 

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const t = input[0];

for (i =1; i <= t; i++){
    let cent =input[i];

    const quarter = Math.floor(cent/25);
    const dime = Math.floor((cent -quarter * 25) /10);
    const nickel = Math.floor((cent - quarter *25 - dime * 10)/5);
    const penny = cent% 5;
     
    console.log(quarter, dime, nickel, penny);
}



