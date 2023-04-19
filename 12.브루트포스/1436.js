// 1436번
// 영화감독 숌

// 종말의 수, 문제이해가 어려웠던 문제
// 결론 666 부터 시작해서 666을 ++ 해서 다음에 666이 나오는 수를 찾는 문제
// 666 이후로 그다음 666이 포함되어있는 큰수는 
// 1666, 2666, 3666, 4666, 5666, 6660, 6661 이런식으로 진행되는데
// 결국 반복문을 통하여 숫자 666 이후에 몇번째에 666이 포함되어 있는 수인지 찾아야함

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString();

let n = parseInt(input);

for (let i = 666; ; i++) {
    let title = i.toString();
    
    if (title.indexOf('666') !== -1) {
      n--;
    }
    if (n === 0) {
      console.log(i);
      break;
    }
  }

  






