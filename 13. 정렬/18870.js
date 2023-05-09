// 18870번
// 좌표 압축

//문제가 이해가 잘안되서 찾아봄
// x'i의 값은 xi > xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
// 즉 주어진 입력값에서 i=2 이 이면 x'i 는 xi(2) > xj(-10,-9) 인 서로 다른 좌표의 개수 2개 이다
// 주어진 입력값 중에서 xi 보다 작은 수들의 개수가 x'i 이다.

// 반복문여러개로 풀면 시간초과 나기 때문에 객체를 활용해서 문제를 풀어줌
// 1. 입력 값의 중복을 먼저 제거하고 오름차순으로 정리
// 2. 객체를 생성 해서 객체 안에 키와 value로 넣어주는데 이때
// 3. 오름 차순으로 정리한 순서대로 키 값이 들어가기 때문에
// 4. 결국 제일 작은 수의 키 값은 0이 되고 그것이 형변환 된 숫자임
// 5. for of 로 기존 배열(num)만큼 반복을 돌리는데
// 6. 출력되는 수는 객체[배열 요소]순으로 반복하면 결국 키값 그 요소에 맞게 출력됨


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.shift();

const num = input[0].split(' ').map(Number);

result = new Object();

// 좌표에 중복 값을 없애고 오름차순으로 정렬하여 배열에 담기
let arr = Array.from(new Set(num)).sort((a,b) => a - b);

// result 객체에 arr 배열의 키와 값을 저장(정렬 순서대로)
for(let i = 0; i< arr.length; i++){
    result[arr[i]]= i;
}
let answer = [];
for(let val of num){
    answer += result[val] + " ";
}

// console.log(arr);
// console.log(result);
console.log(answer);

// 내가 푼 문제 역시 시간초과남
// let arr = [];
// const num = input[0].split(' ').map(Number);
// for (i =0; i<num.length; i++){
//     let temp =0;
//     for(j=0; j< num.length; j++){
//         if(num[i]> num[j]){
//             temp++;
//         }
//     }
//     arr.push(temp);
// }
// console.log(arr.join(' '));










