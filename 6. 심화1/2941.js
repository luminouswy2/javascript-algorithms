// 2941번
// 크로아티아 알파벳
// 크로아티아 알파벳( 두 알파벳)을 하나의 알파벳으로 변경하여 길이추출

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim();

const croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

const solution = function (str) {
  for (const c of croatian) str = str.replaceAll(c, 'c');
  return str.length;
};

console.log(solution(input));