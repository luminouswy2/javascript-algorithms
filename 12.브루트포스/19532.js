// 19532번
// 수학은 비대면 강의 입니다.
// ax + by = c
// dx + by = f
// 위 연립방정식의 x와 y의 값을 구하는 프로그램을 만들어서 도와주자

// 입력이 a,b,c,d,e,f,가 주어 지고 각수는 -999<= <=999 이다.
// 풀이 방식은 다양하지만 브루트포스 단원이기에 처음부터 끝까지 대입해서
// 푸는 방식으로 하고자 for문을 두개 돌려서 구하자


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);



const a = input[0];
const b = input[1];
const c = input[2];
const d = input[3];
const e = input[4];
const f = input[5];

for(i= -999; i<1000; i++ ){
    for (j= -999; j<1000; j++){
        if(a*i+b*j == c && d*i+e*j ==f){
            console.log(i,j);
        }
    }
}







