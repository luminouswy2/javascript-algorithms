//1152번
//단어의 개수
//주어진 문자열의 단어 개수를 구하기
// 오답이 많음, 이유는 '' 빈문자열이 테스트 케이스로 들어오기 때문에 예외처리 해줘야함
// 정규표현식으로 빈공간을 처리해서 하려고했는데 그럴 필요 없이
// 그냥 input 값을 split로 띄어쓰기 부분으로 나눠서 길이 재면됨

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');


console.log(input[0] === "" ? 0 : input.length);

// const str = input[0];

// const x= str.match(/\s/g);


// console.log(input[0] === "" ? 0 : x.length +1 );

    
    
    