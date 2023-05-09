// 1620번
// 나는야 포켓몬 마스터 이다솜

//주어진 입력 값의 첫 번째 줄 n은 포켓몬 수, m 은 풀어야할 문제수
// n개의 포켓몬이 주어지고 그다음부터 m 개의 문제 풀이용 단어와 수가 주어진다.
// 숫자이면 몬스터를, 몬스터의 이름이면 숫자를 출력하면되는문제

// 이번 문제는 인덱스와 포켓몬을 두곳에 담아서
// 입력값이 숫자일때와 문자일때 따로 검색해서 찾게 해야함



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// n,m  n= 포켓몬 수, m= 맞춰야하는 문제 수
const [n,m] = input[0].split(' ').map(Number);

// 배열 길이를 1개 늘린 것은 input[1]부터 시작이여서 그런듯
const poketmons = Array.from({length:n+1});
const index = {};


for(let i=1; i<=n; i++){
    const poketmon = input[i].trim().split('\r');
    poketmons[i] = poketmon;
    index[poketmon] = i;
}   
const answer = [];
for(let i =n+1; i <= n+m; i++){
    const cmd = input[i].trim().split('\r');
    
    // isNaN 함수로 문자이면 true, 숫자이면 false
    if(isNaN(cmd)){        
        answer.push(index[cmd]);
    }else{        
        answer.push(poketmons[cmd]);
        
    }
}



console.log(answer.join('\n'));


// 메모리 초과 

// for(let i=1; i<=n; i++){
//     arr.push(input[i].trim().split('\r'));
// }
// for(let j=n+1; j<=n+m; j++){
   
//     question.push(input[j].trim().split('\r'));
// }

// let obj = Object.assign({},arr);

// for(let k =0; k <question.length; k++){
//     if(isNaN(question[k]) === false){
          
//         let num = Number(question[k])-1; 
           
//         console.log(obj[num].join());
//     }else{ 
           
//       for(i in obj){          
//         if(question[k].toString() === obj[i].toString()){
//             let num =Number(i)+1;
//             console.log(num);
//         }       
//       }
//     }
// }



