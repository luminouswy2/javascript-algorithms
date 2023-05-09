# Javascript array method

## 기초

- push(): 뒤에 삽입
- pop(): 뒤에 삭제
- unshift(): 특정 요소 지움

---

## 중급

### arr.splice(n,m): 특정 요소 지움

- n = 시작, m = 개수
  예

```
let arr = [0,1,2,3,4,5];
arr.splice(1,2);

console.log(arr); // [1,4,5]
```

### arr.splice(n,m,x): 특정 요소 지우고 추가

예

```
let arr =["나는", "철수", "입니다"];
arr.splice(1,0, "대한민국", "소방관"); // 0 이들어갈 경우 아무것도 삭제 안함
```

### arr.splice(): 삭제된 요소 반환

```
let arr = [1,2,3,4,5];
let result = arr.splice(1,2);

console.log(arr); // [1,4,5];
console.log(result); // [2,3]

```

---

## arr.slice(n,m): n부터 m까지 반환

```
let arr = [1,2,3,4,5];
arr. slice(1,4)l // [2,3,4]

let arr2 = arr.slice();
console.log(arr2); //  [1,2,3,4,5] 배열을 그대로 복사
```

---

## arr.concat(arr2, arr3 ..) : 합쳐서 새배열 반환

```
let arr = [1,2];

arr.concat([3,4]) ; // [1,2,3,4];
arr.concat([3,4],[5,6]) // [1,2,3,4,5,6];
arr.concat([3,4],5,6) // [1,2,3,4,5,6]
```

---

## arr.forEach(fn) : 배열 반복

```
let users = ['mike', 'Tom', 'Jane'];

user.forEach((item, index, arr)=>{
    // item= Mike,Tom,jane , index = 0,1,2, arr =users
});
```

---

## arr.indexOf/ arr.lastIndexOf :인덱스 위치 검색 없으면 -1반환

```
let arr = [1,2,3,4,5,1,2,3];
arr.indexOf(3); // 2
arr.indexOf(3,3) // 7
arr.lastIndexOf(3) // 7
```

---

## arr.includes() : 포함하는지 확인

```
let arr =[1,2,3];
arr.includes(2); // true;
arr.incldues(8); // false;
```

---

## arr.find(fn) /arr.findIndex(fn)

- 첫번째 true 값만 반환하고 끝, 없으면 undefined를 반환

```
let arr = [1,2,3,4,5];
const result = arr.find((item) => {
    return item % 2 === 0;
});

console.log(result); // 2

let userList = [
    { name:"Mike", age: 30},
    { name: "jane", age: 27},
    { name: "Tom", age: 10}
]

const result = userList.find((user) => {
    if( user.age <19){
        return true;
    }
    return false;
});

console.log (result); // {name: "Tom", age: 10}
//findIndex는  2를 반환(0,1,2) 첫번째 값만 찾고 끝남
```

---

## arr.filter(fn) : 만족하는 모든 요소를 배열로 반환

```
const arr = [1,2,3,4,5,6];
const result = arr.filter((item) => {
    return item % 2 === 0;
});

console.log(result); // [2,4,6] find와는 다르게 모든 조건 반환
```

---

## arr.reverse() : 역순으로 재정렬

```
let arr =[1,2,3,4,5];
arr.reverse(); // [5,4,3,2,1]
```

---

## arr.map(fn) : 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환

```
let userList ={
    { name:"Mike", age: 30},
    { name: "jane", age: 27},
    { name: "Tom", age: 10}
}

let newUserList = userList.map((user, index) =>{
    return Object.assign({}, user, {
        id: index +1;
        isAdult = user.age >10,
    });
});
console.log(newUserList); // 새로운 배열에 id, isAdult 값 추가
console.log(userList); // 기존 배열 변경 없음
```

---

## Array.isArray() : 배열인지 객체 인지 확인 가능

```
let user ={
    name : "Mike",
    age : 30,
};

let userList = ["Mike", "Tom", " Jane"];

console.log(tyepof user); // object
console.log(typeof userList); // object

console.log(Array.isArray(user)); // false
console.log(Array.isArray(userList)); // true

```
