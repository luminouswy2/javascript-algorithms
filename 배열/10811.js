//10811번
// 바구니 뒤집기
// 바구니를 n번 만큼 생성 후, m번 만큼 입력되는 수의 순서대로 역순으로 변경하여 출력

// 예 12345
// 1~2 번 역순 21345
// 3~4 번 역순 21435
// 1~4 번 역순 34215
// 2~2 번 역순 34215

//교환 형태로 해서 안되서 문제풀이 참고함
// splice로 자르고, 자른부분에 resverse한 값을 넣어서 풀이



const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');


const n = Number(input[0].split(' ')[0]);
const m = input[0].split(' ')[1];

let basket = new Array(n).fill().map((v,i) => i+1);

for (i =1; i < m ; i++){
    let [a, b]= input[i].split(' ').map(Number); 
    
    let arr = [];
    for(let j=a-1; j<b; j++){
        arr.push(basket[j])
    };
    arr.reverse();
    basket.splice(a-1, b-a+1, ...arr);
}


console.log(basket.join(" "));