// 1181번
// 단어 정렬

//알파벳 소문자로 이루어진 n 개의 단어를 아래 조건에 따라 정렬
// 1. 길이가 짧은 것
// 2. 길이가 같으면 사전 순
// 단 중복된 단어는 하나만 남기고 제거

// localeCompare()를 사용하여 알파벳순으로 정렬하였다.
// a.localeCompare(b)는 두 문자열을 비교하여 첫 번째 문자열이 두 번째 문자열보다
// 작으면 음수, 같으면 0, 크면 양수를 반환합니다. 따라서 이 함수의 반환 값을 사용하여 알파벳 순으로 정렬합니다.


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.shift();

// set 객체를 사용하여 중복 제거 
strings = [...new Set(input)];

strings.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    //localeCompare 함수를 사용하여 알파벳 순으로 정렬
    return a.localeCompare(b);
  }
});

console.log(strings.join('\n'));









