// 자바스크립트를 사용해 Hello world 출력해보기
// document = html 문서 + . + write(" 쓰고싶은 말 ") 명령 + ;  
document.write("Hello world");

// var = 변수명
// var 변수명 ; 또는 var 변수명 = 값;
var box; 
var box = 100;
// box 라는 공간에 100이 채워짐

box = 100;
box = 30;
document.write(box);
// 이러면 100 대신 30이 새로운 값으로 저장

// 문자형 
var s = "javascript";
var num="100";
var tag="<h1> String<h1>";

// 숫자형
var s = 100;
var a = Number("500");

//논리형

var a = true;
var b = 1 >= 10;
var c = Boolean("hello");

// Boolean()에 0, null, undefined, 빈문자("")를 제외한 모든 데이터에 대해 true 반환

//tag 사용하기
var a = Boolean("hello");
var b = false;


var num1 = 15;
var num2 =2;
var result;

var c = 10 > 5;
document.write(a,"<br>");
document.write(b,"<br>");
document.write(c,"<br>");
// 변수에 저장된 결과값이 다음줄에 출력됨

//null, undefined 데이터 
// var a = 0 , var a; 다르다 

//typeof 변수 또는 데이터 = 변수에 저장된 자료형을 알수있음

var num = 100;
var str = "자바스크립트";
document.write(typeof num, "<br>");
documnet.write(typeof str);

//연산자 + - % * /
//증감 연산자 
// 변수--; 또는 --변수; -> 변수의 값을 1만큼 감소시킨다.
// 변수 ++; 또는 ++변수; -> 변수의 값을 1만큼 증가시킨다.
// A == B 숫자를 비교할 경우 자료형은 숫자형이든 문자형이든 상관없이 표기된 숫자만 같으면 true 반환
// A != B 숫자를 비교할 경우 자료형은 숫자형이든 문자형이든 상관없이 표기된 숫자가 다르면 true 반환 
// A === B 숫자를 비교할 경우 자료형은 숫자형이든 문자형이든 다르면 false 반환 즉 숫자형은 숫자형, 문자형은 문자형
// A !== B 숫자를 비교할 경우 자료형은 숫자형이든 문자형이든 같지 않으면 true 반환 
// || or 연산자 && and 연산자 ! not 연산자 
// 연산자 우선순위 1. () 2. 단항 연산자(--, ++, !) 3.산술 연산자(*, / ,%,+,-)
// 4.비교 연산자(>, >=, <, <=, ==, ===, !==, !=) 5.논리 연산자 (&&,||) 6. 대입(복합 대입)연산자(=, +=, -=, *=, /=,%=)
// 삼항 조건 연산자
// 조건식? 자바스크립트 코드1 : 자바스크립트 코드2
var a =10;
var b = 5;
var result = a > b? "yes" : "no";
document.write(result);

