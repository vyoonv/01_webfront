/* .js 파일 내부를 <script> 태그 내부라고 생각하면 됨 */

function externalFn() {
    alert("외부 파일에 작성된 externalFn() 함수 호출됨"); 
}

//**************************** */

//JS 맛보기
//버튼 클릭 시 body 태그의 글자색, 배경색을 변경

const body = document.querySelector("body"); /* body 태그 선택 */

/*실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode() {
    body.style.color = "white"; //글자색을 흰색으로 변경 
    body.style.backgroundColor = "black"; //배경색을 검정으로 변경 
}

/*= : 오른쪽 값을 왼쪽에 대입하는 연산자*/

/*실행되면 라이트모드로 바꾸는 함수 */
function lightMode() {
    body.style.color = "black";
    body.style.backgroundColor = "white";
}