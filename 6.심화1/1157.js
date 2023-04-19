// 1157번
// 단어 공부
// 가장 많이 사용된 단어가 무엇인지 확인 
// 단순하게 하려고 했으나 잘 안되었던문제
// 아스키코드로 변환해서 알파벳 수만큼의 배열에 담아서 배열의 가장 큰 값을 찾아서 추출


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim();

// input 을 모두 대문자로 변환(보통 대문자로 진행)
const newInput = input.toUpperCase();


let countArr = new Array(26).fill(0);
let str = [];

for(i = 0; i<input.length; i++){
    //countArr에 해당하는 문자위치에 +1 되도록 작성
    countArr[newInput.charCodeAt(i) - 65]++; 
}

const max = Math.max(...countArr);
//max의 인덱스 번호를 추출
const index = countArr.indexOf(max);

//max 값을 가지는 인덱스가 여러개일 경우 판단하기위한 변수
let sameRate=false;

// max와 아래의 인덱스중에 같지 않은것이 있으면 큰값이 여러개  
for(i=0; i<26; i++){
    if(countArr[i] === max && index != i){
        sameRate = true;
        break;
    }
}

console.log(sameRate ? "?" : String.fromCharCode(index + 65));


