// 7785번
// 회사에 있는 사람

// 자유로운 출퇴근이 있는 회사에서 출퇴근 로그가 주어졌을 경우
// 현재 회사에 있는 모든 사람을 구하는 프로그램


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// 계속 오류가 나서 왜그런가 했는데 a.localeCompare(b)이걸로 정렬을했는데
// 잘나오나 했더니 a,A가 반대로 나와서 계속 오류가 났던거임


// 첨에 했던 코드 이것도 안된 이유는 sort((a,b)=>a.localeCompare(b)) 이걸 사용해서 안된 거였음
// 다시 알고나서 소트만 변경해서 했더니 됐음

const n = Number(input[0]);

const arr =[];

for(i=1; i<=n;i++){
    temp =[input[i].split(' ')[0],input[i].split(' ')[1].trim('\r')];    
    arr.push(temp);
    
}

// 배열을 Map() 객체에 담으면서 중복된 키의 값이 마지막에 들어온 값으로 변경

const leave = new Map(arr);
console.log(leave);
const result=[];
leave.forEach((value,key) => {
    if(value == 'enter'){
        result.push(key);
    }
    
})
result.sort();
result.reverse();

console.log(result.join('\n'));


// 나중에 다른 사람거 보고 한것

// const n = Number(input[0]);

// const set =new Set;

// for(i=1; i<=n;i++){
//     let [name, state]  =[input[i].split(' ')[0], input[i].split(' ')[1].trim('\r')];  
//     // console.log(name,state);    
//     if (state === 'enter'){
//         set.add(name); 
//     }              
//     if(state == 'leave'){
//        set.delete(name);            
//     }
//     // console.log(set);    
// }

// let result =[...set].sort();
// result.reverse();

// console.log(result.join('\n'));