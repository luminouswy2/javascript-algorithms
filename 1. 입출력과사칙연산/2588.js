const fs =require('fs');

const input = fs.readFileSync('./text.txt').toString().split('\n');

const num0 = Number(input[0]);
const num1 = Number(input[1]);

const a = num1 % 10;
const b = Math.floor((num1 % 100)/10);
const c = Math.floor(num1/100);



console.log(num0 * a);
console.log(num0 * b);
console.log(num0 * c);

console.log(num0 * num1 );