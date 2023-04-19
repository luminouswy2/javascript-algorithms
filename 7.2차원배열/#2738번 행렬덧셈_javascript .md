# 백준 2738번 행렬 덧셈(javascript)

## 문제

- N\*M크기의 두 행렬 A와 B가 주어졌을 때, 두 행렬을 더하는 프로그램을 작성하시오.

## 입력

- 첫째 줄에 행렬의 크기 N 과 M이 주어진다. 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다. N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.

## 출력

- 첫째 줄부터 N개의 줄에 행렬 A와 B를 더한 행렬을 출력한다. 행렬의 각 원소는 공백으로 구분한다.

## 예제 입력 1

> 3 3
> 1 1 1
> 2 2 2
> 0 1 0
> 3 3 3
> 4 4 4

## 5 5 100

## 예제 출력1

> 4 4 4
> 6 6 6

## 5 6 100

## 문제 풀이

1. 먼저 데이터를 어떻게 2차원 배열로 받을지 고민
2. 배열을 더하고 다시 배열을 문자열로 출력해야 함

---

## 먼저 풀이

```javascript
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = [];
const arr2 = [];

for (i = 1; i <= n; i++) {
  let s = input[i].split(" ").map(Number);
  arr1.push(s);
}
for (j = n + 1; j <= n + m; j++) {
  let c = input[j].split(" ").map(Number);

  arr2.push(c);
}
var ans = Array.from({ length: n }, (_) => Array.from({ length: m }, (_) => 0));

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    ans[i][j] = arr1[i][j] + arr2[i][j];
  }
}

console.log(ans.map((v) => v.join(" ")).join("\n"));
```

---

## 시행 착오

- 내가 풀은 문제는 런타임 에러 발생해서 여러가지 시도를 해보았으나 원인을 찾지못했다
  (그 이전에도 split후 /r 때문에 빈배열이 생기는 문제인줄알고 trim()해보았으나 안됨
  그래서 아래 참고한 코드의 입력값을 나누는 방식으로 진행

## 다른 사람 코드 참고

```javascript
let [[n, m], ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let ans = Array.from({ length: n }, (_) => Array.from({ length: m }, (_) => 0));

for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++) {
    ans[i][j] = arr[i][j] + arr[n + i][j];
    console.log(arr[i][j], arr[n + i][j]);
  }

console.log(ans.map((v) => v.join(" ")).join("\n"));
```

---
