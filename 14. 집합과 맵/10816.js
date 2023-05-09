// 10816번
// 숫자 카드 2

//n개의 카드를 가지고 있고 m 개의 카드가 주어졌을때  각 카드별로
// 몇개의 카드를 가지고 있는지 표시하는 프로그램을 작성

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// n  가지고 있는 카드의 수
const n = parseInt(input[0]);

// 가지고 있는 카드의 번호
const n_card = input[1].split(' ').map(Number);
const obj = new Object();

// m = 주어진 카드의 수
const m = parseInt(input[2]);

// 주어진 카드의 번호
const m_card =input[3].split(' ').map(Number);

const count = [];

// 가지고 있는 카드가 객체에 없으면 obj[n_card[i]]= 1을 하고 
// 있으면 obj[n_card[i]]++ 하나식 더한다.
// 그러면 객체에 키값으로 주어진 카드의 번호가 들어가고 값으로 카드의 갯수가 들어감

for(let i=0; i<n; i++){
    // 아래 if문 삼항연산자
    // obj[n_card[i]] ? obj[n_card[i]]++ : obj[n_card[i]] =1 ;
    if(obj[n_card[i]]){
        obj[n_card[i]]++
    }else{
        obj[n_card[i]]=1;
    }
}

//비슷하게 주어진 카드가 있으면 배열에 객체의 값(결국 카드의 갯수)을 넣는다


for (let i=0; i<m; i++){
    obj[m_card[i]] ? count.push(obj[m_card[i]]) : count.push(0);
}


console.log(count.join(' '));