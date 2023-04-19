// 2738번
// 행렬덧셈


// map() 한번만 사용할경우 가장 높은 차원의 배열요소에서만 변형 
// 다차원 하고싶을 경우 차원수 만큼의 map() 사용해야됨

// const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
// const input = fs.readFileSync(file).toString().trim().split('\n');


// const [n, m] = input[0].trim().split(' ').map(Number);
// let arr =[];

// for(let i=1; i<= n+m ; i++){
//     let s = input[i].trim().split(' ').map(Number);
//     arr.push(s);
// }

// var ans = Array.from({ length: n }, (_) =>
//     Array.from({ length: m }, (_) => 0)
// );

// for (let i = 0; i < n; i++)
//     for (let j = 0; j < m; j++) {
//         ans[i][j] = arr[i][j] + arr[n + i][j];
        
//     }
      
// console.log(ans.map((v) => v.join(" ")).join("\n"));




let [[n, m], ...arr] = require("fs")
    .readFileSync(file)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number));
 
let ans = Array.from({ length: n }, (_) =>
    Array.from({ length: m }, (_) => 0)
);


for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
        ans[i][j] = arr[i][j] + arr[n + i][j];
        
    }
      
console.log(ans.map((v) => v.join(" ")).join("\n"));
  

