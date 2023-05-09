//25314번
// 4의 배수만큼 long을 붙이는 문제

const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');

// /4 4의 배수 만큼 출력해야됨 
const n = Number(input[0])/4;

const long = 'long ';

console.log(`${long.repeat(n)}int`);


// 위에 방식으로 하면 출력 초과됨

// let fs = require("fs");
// let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";

// let input = Number(fs.readFileSync(filePath).toString()) / 4;
// let long = "long ";

// console.log(`${long.repeat(input)}int`);