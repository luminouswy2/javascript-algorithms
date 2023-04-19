// 2798번
// 블랙잭
// 카드의 합이 21을 넘지 않는 한도 내에서 카드의 합을 최대한 크게 만드는 게임
// N장의 카드에 써져 있는 숫자가 주어졌을 때, M을 넘지 않으면서 M에 최대한 가까운 카드 3장의 합을 구해 출력하시오.

// 첫째 줄에 n장의 카드수와  m의 수가 주어진다.
// 두번째 줄에는 n장의 카드에 쓰여있는 수가 주어진다.
// 합이 M을 넘지 않는 카드 3장을 찾을 수 있는 경우만 입력으로 주어짐

// 첫째 줄에 M을 넘지 않으면서 M에 최대한 가까운 카드 3장을 출력

// 브루트 포스(brute force), 키 전수조사 또는 무차별대입은 조합가능한 모든 문자열을
// 하나씩 대입해 보는 방식
// 말그대로 하나씩 대입하기 위해 3중for문을 사용

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, m ]= input[0].split(' ').map(Number);
const num = input[1].split(' ').map(Number);
let result = 0;
for(i=0; i<n ; i++){
    for(j= i+1; j < n; j++ ){
        for(k= j+1; k < n ; k++){
            const sum = num[i]+ num[j]+ num[k];
            
            const gap = m- sum;
            if(gap >=0 && result <= sum){
                result = sum;
            }
        }
    }
}

console.log(result);


