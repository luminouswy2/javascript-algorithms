// 2869번 
// 달팽이는 올라가고 싶다.

// 낮에 a미터를 오르고 
// 밤에 b 미터를 미끄러짐
// 정상에 올라간 후에는 미끄러지지 않음
// 걸린날짜 = 높이 / 올라가는 높이 이지만
// 정상에 올가면 미끄러지지 않기 때문에 첨부터 높이에서 미끄러지는 높이를 빼줌
// 값이 정확하게 나눠지지 않을경우 Math.ceil() 올려서 계산



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const a = input[0];
const b = input[1];
const v = input[2];

result = Math.ceil((v-b)/(a-b));

console.log(result);
