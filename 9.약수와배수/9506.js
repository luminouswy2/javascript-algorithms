// 9506번
// 약수들의 합
// 약수를 배열에 담을 때 반복문에서 입력값과 같은 약수는 미리 빼줌
// reduce()를 사용하여 배열을 더하고
// join 함수를 사용하여 배열들을 출력

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);




for(i=0; i< input.length-1; i++){
    let arr = [];
    
    for(j=1; j<=input[i]; j++ ){
        if( input[i] % j ===0 && input[i] != j){
            arr.push(j);
        }
    }
    let sum = arr.reduce((prev, cur)=>{
        return prev + cur;
    }, 0);
    
    if(input[i] == sum){
        console.log(`${input[i]} = ${arr.join(' + ')}`)
     
    }else{
        console.log(`${input[i]} is NOT perfect.`);
    }

}
