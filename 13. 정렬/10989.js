// 10989번
// 수 정렬하기3


// node.js로 메모리 초과 나오는 문제(자바스립트로는 풀수 없음)
// 계수 정렬(counting sort)로 푸는 문제 O(n)의 시간복잡도
// 배열 내 최대 값 +1만큼 길이 배열이 필요하기에 메모리 낭비가 될 수 있음
// 배열을 만들고 그곳에 입력된 숫자만큼 카운팅하여 계산하는 문제



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

input.shift();

const max = Math.max(...input);

const arr = new Array(max+1);
arr.fill(0);

for(i=0; i<input.length; i++){
    arr[input[i]]++;
    // console.log(input[i]);
}

for (i=0; i<arr.length; i++){
    if(arr[i]){
        for(let j=0; j<arr[i] ; j++){
            console.log(i);
        }
    }
}







