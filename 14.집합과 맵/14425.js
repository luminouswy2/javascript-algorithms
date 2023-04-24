// 14425번
// 문자열 집합

// 총 n개의 문자열로 이루어진 집합 s가 주어진다.
// 입력으로 주어지는 m개의 문자열 중에서 집합 s에 포함되어 있는 것이 총
// 몇 개인지 구하는 프로그램을 작성하시오

// 문제가 잘 이해가 안되었음
// 결국 n(5)개의 집합s가 주어지고 m개의 문자열(줄)이 몇개 포함되어 있는지 구하는것



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// n,m  = n 문자열 수, 집합 s 의 수
const [n, m]= input[0].split(' ').map(Number);

let s = new Set()
let nstr = [];
let cnt = 0;

for(i=1; i<=n; i++ ){
    s.add(input[i].trim());
}

for(j=n+1; j<=n+m; j++){
    nstr.push(input[j].trim());
}

for(let val of nstr){
    if(s.has(val)) cnt++;
}


console.log(cnt);

