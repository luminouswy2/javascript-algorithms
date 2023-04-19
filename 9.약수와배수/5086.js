// 5086번
// 배수와 약수
// 

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

for(i=0;i<input.length-1 ;i++){
    const num = input[i].split(' ').map(Number);
   
    if(num[1] % num[0] == 0){
        console.log('factor');
    }else if (num[0] % num[1] ==0){
        console.log('multiple');
    }else {
        console.log('neither');
    }
}





