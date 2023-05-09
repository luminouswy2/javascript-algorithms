//4344번
//평균이 넘는지 알려주는 문제



const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const c = parseInt(input[0]);

for (i =1 ; i <= c; i++){
    const score = input[i].split(' ').map(Number);
    const n = score[0]; 
    let sum = 0;
    let count=0;
    for(j= 1; j < score.length; j++){
        sum += score[j];
             
    }  
    let avg = sum/n;

    // 평균 값보다 높은 학생
    for(k=1; k<=n; k++){
        if(score[k]>avg){
            count++;
        }
    }    

    console.log(((count/n)*100).toFixed(3)+"%");
}



