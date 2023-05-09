// 5073번
// 삼각형과 세 변

// 삼각형의 세변의 길이가 주어질때 정의에 따른 결과를 출력하시오
// Equilateral :  세 변의 길이가 모두 같은 경우
// Isosceles : 두 변의 길이만 같은 경우
// Scalene : 세 변의 길이가 모두 다른 경우
// Invalid :  가장 긴 변의 길이보다 나머지 두변의 길이의 합이 길지 않을때 삼각형의 조건을 만족 못함;

// 숫자 배열 sort() 하면 숫자를 유니코드로 취급하여 제대로 정렬 안됨
// 반드시확인해야함..!!!
// Set 객체를 활용


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');


for(i=0; i<input.length-1; i++){
    let num = input[i].split(' ').map(Number);
    num.sort((a,b) => a- b);
    let set = new Set(num);
    
   
    if(num[2] >= num[0] + num[1] ){
        console.log('Invalid')
    }else if(set.size===1){
        console.log('Equilateral');
    }else if(set.size ===2){
        console.log('Isosceles');
    }else{
        console.log('Scalene');
    }
   
}

