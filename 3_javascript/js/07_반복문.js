// for(let num = 1; num <= 5; num++) {
//  //조건식이 true인 경우 반복 수행할 코드;
//  console.log("통과!");
// }


function check1() {
    let result = ""; //빈문자열
    
    for(let num =1; num <= 5; num++) {
        //console.log(num);

        result += num;
        //result = result + num;
        //  "1"       "" + 1 (1턴)
        //  "12"      "1"  + 2 (2턴)
        //  "123"     "12"  + 3 (3턴)
        //  "1234"    "123"  + 4 (4턴)
        //  "12345"  "1234"  + 5 (5턴)
        
    }

    console.log(result);
}

function check2() {
    for(let num =1; num <= 10; num++ ) {
        console.log(num);
        }
}

function check3() {
    for(let num=1; num <=20; num++) {
        console.log("num:", num) ;
    }
}

function check4() {
    for(let num=5; num <=15; num++) {
        console.log("num:", num) ;
    }
}

function check5() {
    for(let num=1; num<=30; num += 2) {
        console.log(num);
    }
}

function check6() {
    //1부터 10까지 모든 정수의 합 
    let sum = 0; //합계를 저장하기 위한 변수 
    for(let num=1; num<=10; num++) { // num 1~10 변함 
        sum += num;         
    }
    console.log("sum:", sum)
}

/*
function sumFn() {
    const number1 = document.getElementById("inputNumber1-1");
    const number2 = document.getElementById("inputNumber1-2");
    const result1 = document.getElementById("result1");

    let sum = 0;
    for(let num=number1; num=number2; num++) {
        sum += num;
    }
    console.log("result1:", sum);
    // result1.innerText("result1");
}
*/

function sumFn() {
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);
    const result1 = document.getElementById("result1");

    //합계를 저장할 변수 
    let sum = 0;

    //start 부터 end 까지 1씩 증가하는 for 문
    for (let num=start; num<=end; num++) {
        sum += num; // num 값을 sum에 누적 

    }
    result1.innerText = sum ;
  
}

function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);
    
    //결과 출력 ul요소
    const ul = document.getElementById("result2"); //ul태그

    ul.innerHTML = "" ; // 이전 ul에 작성된 내용을 모두 삭제 
     //start부터 end까지 val씩 증가 
    for(let num = start; num <= end; num += val) {
        ul.innerHTML += '<li>${num}</li>';
    }
}

//요소.innerText = '<li>${num}</li>';
// ->요소의 내용으로 문자열을 대입
// (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

//요소.innerHTML = '<li>${num}</li>';
// ->HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력 