//조건문
/*if(조건식){
 자바스크립트 코드;
} */

var num = 10;
if(num < 500){
    document.write("hello");
}
if(0){
    document.write("hello");
}
let walkAmout = prompt("당신의 하루 걷는 양은 몇 보인가요?", "0");

if(walkAmout>=1000){
    document.write("매우좋은 습관입니다.");
}

//변수를 만들어 값을 저장 한후 
// if문 조건식에 넣어주고 document에 출력 해주면 된다.
// 조건식에 0, null, "" , undefined -> false 반환

/* if(조건식){
    자바스크립트 1;
}
else{
    자바스크립트 2;
}
여기까지는 자바 if 문과 똑같다
*/ 
//ex
var num = prompt("당신이 좋아하는 숫자는?", "0");

if(num %2 == 0){
    document.write("당신이 좋아하는 숫자는 짝수입니다.");
}else{
    document.write("당신이 좋아하는 숫자는 홀수입니다.");
}
// 확인/취소 창 만들기 confirm("message");

var result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if(result){
    document.write("탈퇴 처리되었습니다!");
}else{
    document.write("탈퇴 취소되었습니다!");
}

// else if 자바랑 똑같음

var mon = prompt("현재는 몇 월입니다?", "0");

if(6> mon >= 3){
    document.write("봄입니다!");
}else if(9> mon >=6){
    document.write("여름입니다!");
}else if(12> mon >=9){
    document.write("가을입니다!");
}else{
    document.write("겨울입니다!")
}

// 중첩 if문
/* if(조건식1){
    if(조건식2){
        자바스크립트 코드;
    }
}
*/

var id = "wow";
var pw =  "1234";

var user_id = prompt("아이디는?");
var user_pw = prompt("비밀번호는?");

if (id == user_id){ // 아이디가 일치하면 실행
    if(pw == user_pw){ 
        document.write(user_id+"님 환영합니다!");// 비밀번호가 일치하면 실행
    }else{
        alert("비밀번호가 일치하지 않습니다!"); // 비밀번호가 일치하지 않으면 실행
        location.reload(); // 브라우저 새로고침
    }
}else{
    alert("아이디가 일치하지 않습니다!"); // 아이디가 일치하지 않으면 실행
    location.reload();
}
