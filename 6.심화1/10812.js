//10812번
//바구니 순서 바꾸기

// 1 ~ n 번까지의 바구니
// 입력 값 순서대로 begin, end , mid 
// begin 번 바구니 부터 end 번 반구니까지 mid번 바구니를 기준으로 순환
// ^1,2,3,+4,5,^6,7,8,9,10 (초기 바구니)(begin=1, end= 6, mid =4)
// 4,5,6,1,2,3,7,8,9,10  (begin=3, end= 9, mid =8)
// 4,^5,8,9,+6,1,2,3,7,^10   (begin=2, end= 10, mid =5)
// ^4,6,+^1,2,3,7,10,5,8,9, (begin=1, end= 3, mid = 3)
// 1,s^4,6,2,3,^7,10,5,8,9, (begin=2, end= 6, mid =2)
// 1,4,6,2,3,7,10,5,8,9,
// 문제 자체 이해하기 힘듬, 바구니 숫자를 기준으로 이동
// mid부터 end 까지 자른부분을 begin앞에 붙여주고 다시 원래 바구니에 집어 넣으면
// 되는 문제


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n = parseInt(input[0].split(' ')[0]);
const m = parseInt(input[0].split(' ')[1]);

let basket = new Array(n).fill().map((v, i) => i+1);


for(i=1 ; i <= m ; i++){
    let [begin, end, mid] =  input[i].split(" ").map(Number);
    
    let del = end - (begin-1) ;
    
    let arr = [];
    let cut = [];
    let temp =[];
    
    // basket 앞으로 옴겨야할 뒷 배열과, 나머지 앞부분의 배열을 잘라낸뒤
    // concat()함수로 둘을 합쳐서 splice()함수를 활용하여 다시 basket에 붙여줌
    cut = basket.slice(mid-1, end);  
    arr = basket.slice(begin-1,mid-1)    
    temp = cut.concat(arr);
    
    basket.splice(begin-1, del, ...temp); 
}
console.log(basket.join(' '));




