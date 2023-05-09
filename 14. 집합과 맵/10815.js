// 10815번
// 숫자 카드

// 숫자 카드가 여러개 있는데 정수 M이 주어졌을때 
// M이 적혀 있는 숫자카드를 가지고 있는지 확인하는 프로그램을 작성

// 당연히 처음에 반복문으로 indexOf를 사용해서 시간초과가 났다.
// 자료구조를 이용해야한다해서 찾아보니 Set 객체를 활용해야한다.
// 그래서 찾아본 것을 아래에 정리

// Set 
// set 객체는 중복되지 않는 유일한 값들의 집합, 아래와 같은 특징이 있다
// 1. 동일한 값을 중복하여 포함할 수 없다.
// 2. 요소 순서에 의미가 없다.
// 3. 인덱스로 요소에 접근할 수 없다.
// 이러한 set 객체는 수학적 집합을 구현하기 위한 자료구조이다.
// set을 통해 교집합, 합집합, 차집합, 여집합 등을 구현할 수 있다.
// size,add,has,delete,clear.forEach 등등이 있다.



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// n  = 가지고 있는 카드의 수
const n = Number(input[0]);

// num = 가지고 있는 카드에 적혀있는 수
const num = new Set(input[1].split(' ').map(Number));

//  m = 주어진 카드의 수
const m = Number(input[2]);

// number = 주어진 카드의 수
const number =input[3].split(' ').map(Number);

let answer = [];

for(i=0; i<m; i++){
    if(num.has(number[i])){
        answer += 1 + ' ';
    }else{
        answer += 0 + ' ';
    }
}


console.log(answer);

