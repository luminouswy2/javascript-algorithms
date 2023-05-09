// 2750번
// 수 정렬하기

// 첫 번째 들어오는 수는 잘라 주면됨
// sort()함수로 구할수 있지만
// 삽입, 버블, 선택 정렬로도 해서 풀어봄


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

input.shift();


// 1. 간단하게 구현하는 코드
input.sort((a,b) => a-b)

// 2. 거품 정렬(bubble sort)로 해보기
// 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘
// 인접한 2개의 레코드를 비교하여 정렬 시간복잡도 O(n^2)

// for (let i =0 ; i<input.length-1; i++){
//     let temp;
//     for(let j=0; j<input.length-1-i ; j++){
//         if(input[j] > input[j+1]){
//             temp = input[j];
//             input[j] = input[j+1];
//             input[j+1] =temp;
//         }
//     }
// }


// 3. 삽입 정렬(insertion sort)
// 앞에서 부터 차례대로 비교 O(n^2)
// input[1] 부터 input[0]과 비교해야하기에 i=1 부터 시작
// 왼쪽 비교는 left = i-1 , cur 변수는 

// for (let i =1; i < input.length; i++){
//     let left = i-1;
//     let cur = input[i];
//     // 왼쪽 값이 input[i]보다 클 경우 바꾸기 위해 while문 사용
//     while(left >= 0 && input[left] > cur){
//         //input[left+1] = input[i] 현재값이지만 여기에 왼쪽의 큰값을 넣음 
//         input[left+1] = input[left];
//         //innut[i]는 위에서 값이 변경되기에 cur 변수를 사용해서 변경되기전의 값을 넣어줌
//         input[left]= cur;       
//         left --;
//         console.log(input);
//     }   
// }

// 4.선택 정렬(selection sort)
// 한가지 원하는 요소(최솟값이면 배열의 최솟값)를 선택하여 변경 

// for(let i = 0 ; i<input.length; i++){
//     let minIndex = i;
//     for(let j= i+1; j<input.length; j++){
//         if(input[minIndex]>input[j]){
//             minIndex = j;
            
//         }
//     }

//     if(minIndex !==i){
//         let temp = input[minIndex];
//         input[minIndex] = input[i];
//         input[i] = temp;
//     }
// }


for(i=0; i<input.length; i++){
    console.log(input[i]);
}