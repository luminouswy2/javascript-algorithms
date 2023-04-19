//5622번
//다이얼

//ial[i] == 다이얼 숫자 1을 걸려면 2초 ~ 그다음부터 1초씩증가 숫자는 (1,2,3,4,5,6,7,8,9,0) 순서
// 문자는 각해당하는 숫자번호로 눌러야됨  1,2(abc),3(def),4(ghi),5(jkl),6(mno),7(pqrs),8(tuv),9(wxyz),0
// 문자에 해당하는 숫자로 전화를 걸경우 최소시간 구하기

//1. 객체로 만들기
//2. 해당 객체에서 문자 검색
//3. 키값을 출력하여 더하기
// for...in  문을 통하여 객체 문자열 반복, inlcudes()함수를 통하여 입력 값이 있는지 확인 

const number = {
	ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
};

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('');

const dial = input;

let sum = 0 ;

for( i =0; i<dial.length; i++){
    for (let x in number){
        if(x.includes(dial[i])){
            sum += number[x];
        }
    }
}


// 몰랐을때 그냥 풀었던 무식한 방법
// for (i= 0; i < dial.length; i++){
//     let str = dial[i];
//     if(str == 'A' || str == 'B' || str == 'C'){
//         sum += 3;
//     }else if(str == 'D' || str == 'E' || str == 'F' ){
//         sum += 4;
//     }else if(str == 'G' || str == 'H' || str == 'I' ){
//         sum += 5;
//     }else if(str == 'J' || str == 'K' || str == 'L' ){
//         sum += 6;
//     }else if(str == 'M' || str == 'N' || str =='O' ){
//         sum += 7;
//     }else if(str == 'P' || str == 'Q' || str == 'R' || str == 'S' ){
//         sum += 8;
//     }else if(str == 'T' || str == 'U' || str == 'V' ){
//         sum += 9;
//     }else if(str == 'W' || str == 'X' || str == 'Y' || str == 'Z' ){
//         sum += 10 ;
//     }
   
// }

console.log(sum);