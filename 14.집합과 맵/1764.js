// 1764번
// 듣보잡

// 첫째 줄에 듣도 못한 사람의 수 n , 보도 못한 사람의 m 이 주어진다.
// 둘째 줄부터 듣도 못한 사람의 이름과, n+2째 줄부터 보도못한 사람의 이름이 순서대로 주어진다.
// 듣도 보도 못한 사람의 수와 이름을 출력하면됨

// 비교시에 배열이나 객체 비교할때 주의해야할듯

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// n  가지고 있는 카드의 수
const [n,m] = input[0].split(' ').map(Number);

const listen =[];
const result = [];
for(let i=1; i<=n; i++ ){

    // trim().split('\n'); 을 할 경우(아래도 마찬가지) obj.has가 false가 났음 
    // 예상은 split이 배열로 묶여서 그런것 같았는데 그래서 서로 다른 주소값이여서 그런듯
    listen.push(input[i].trim());
}
const obj = new Set(listen);

for(let i=n+1; i<=n+m; i++ ){
    const see = input[i].trim();
      
    if(obj.has(see)){
        result.push(see);
    }

}

console.log(result.length);
console.log(result.join('\n'));

console.log(obj);