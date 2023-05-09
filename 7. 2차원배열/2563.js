//2563번
// 색종이
// 2차원 배열을 활용하여 색종이로 평면을 덮는 문제
// 1.100X100 사이즈의 도화지(배열)
// 2. 10x10의 색종이가 n개가 있음
// 3. 색종이의 왼쪽(x)과 아래쪽(y) 좌표가 주어짐
// 4. 색종이의 가로x+10 세로 y+10
// 5. 도화지 배열에서 true인 요소의 개수를 세어 답을 구함

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const n = parseInt(input[0]);
const data = [];

for(i=1; i <= n ; i++){
    const str = input[i].trim().split(' ').map(Number);  
      
    data.push(str);
    
}

function solution(n, data){
    let paper = new Array(100).fill().map(el => new Array(100).fill(false));

    for (let i = 0; i< n ; i++){
        const colorPaper = data[i];
        const x = colorPaper[0], y = colorPaper[1];
            
        for (let j = 0; j < 10; j++) {
            for(let m=0; m<10; m++){
               paper[x+j][y+m] = true;
            
            }
        }
    }

    
    const answer = paper.reduce((prev, curr)=>{
        for(const el of curr){
            if(el){
                prev++;
            }
        }
        return prev;    
    }, 0);

    console.log(answer);
}

solution(n, data);


