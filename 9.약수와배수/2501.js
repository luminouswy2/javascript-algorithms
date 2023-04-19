// 2501번
// 약수 구하기
// 약수를 구해서 배열에 담기
// 약수의 개수가 k보다 작을 경우 0 출력

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);


const n = input[0];
const k = input[1];

let arr = [];

for (i=1; i<=n; i++){
    if(n % i === 0 ){
        arr.push(i);
    }   
}



if(arr.length <k){
    console.log(0);
}else{
    console.log(arr[k-1]);
}

