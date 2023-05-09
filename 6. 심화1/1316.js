// 1316번
// 그룹단어 체커
// 그룹단어(각 문자가 연속해서 나타나는 단어 예, ccaazzbb =cazb , aabbcb = 가 떨어져 있어서 그룹단어 아님)를
// 찾아서 그룹단어가 맞는지 확인, 키포인트는 입력되는 문자가 떨어져서 나오는지 확인하는게 포인트
// 1. 임시 배열에 한문자씩 푸쉬(문자가 없을 경우에만)
// 2. 같은 문자가 있고 문자의 인덱스와 배열의 길이를 비교해서 문자가 떨어져서 나타나는지 확인
// 3. 떨어져서 나타날경우(isGroupWord =false) 카운트를 올리지 않음 

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');


const words = input.slice(1);
let count =0;

for(const word of words ){
    const wordArr = word.split('');
   
    let temp = [];
    let isGroupWord = true;
    for(i=0; i<wordArr.length; i++){
        if(!temp.includes(wordArr[i])){
            temp.push(wordArr[i]);
        }else{            
            if(temp.indexOf(wordArr[i]) !== temp.length -1 ){
                isGroupWord = false;
                break;
            }
        }
    }
    isGroupWord && count ++;

}

console.log(count);