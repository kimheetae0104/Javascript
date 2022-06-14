// 객체 
// 자바스크립트는 객체 언어이다. 
/* 메서드 
    출력기능, 티비를 끄다 켜다 등
   속성
    티비의 너비, 높이, 색상 등

    객체.메서드();
    객체.속성; 도는 객체.속성 = 값;
*/

// 내장객체 생성하기 
// 참조변수(인스턴스 이름) = new 생성함수()

var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function(){
    document.write("tv 색상:" + this.color,"<br>");
    document.write("tv 가격:" + this.price,"<br>");
}
var car = {
    color: "black", price: 500000,
    info:function(){
        document.write("car 색상:"+this.color,"<br>");
        document.write("car 가격:"+this.price,"<br>");
    }
};

document.write("<h1>tv 객체 메서드 호출</h1>");
tv.info();
document.write("<h1>car 객체 메서드 호출</h1>");
car.info();

//날짜객체
/* 참조변수 = new Date(); var t =new Date();
    참조변수=new Date("연/월/일"); var t=new Date("2022/5/31");
    참조변수=new Date(연, 월-1,일); var t = new Date(2022,5,31);
*/
var today=new Date();
var nowMonth=today.getMonth()+1,
nowDate=today.getDate(),
nowDay=today.getDay();

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재 월:" + nowMonth,"<br>");
document.write("현재 일:" + nowDate,"<br>");
document.write("현재 요일:" + nowDay);

var worldcup = new Date(2002,4,31);
var theMonth = worldcup.getMonth(),
theDate = worldcup.getDate(),
theDay=worldcup.getDay();

document.write("<h1>월드컵 날짜 정보</h1>");
document.write("2002월드컵 몇 월:"+theMonth,"<br>");
document.write("2002월드컵 몇 일:"+theDate,"<br>");
document.write("2002월드컵 무슨 요일:"+theDay,"<br>");

// 남은 일 수(밀리초) = 특정 날짜 객체 - 현재 날자 객체

var today = new Date();
var nowYear = today.getFullYear();

var theDate = new Date(nowYear, 11, 31);
var diffDate=theDate.getTime()-today.getTime();

var result=Math.ceil(diffDate/(60*1000*60*24));
document.write("연말 D-day:"+result+"일 남았습니다.");

//수학 객체

var num = 2.21234;

var maxNum = Math.max(10,4,3,6), //최댓값
minNum = Math.min(10,6,4,7), // 최솟값
roundNum=Math.round(num), //소수점 첫째자리반올림
floorNum=Math.floor(num), // 소수점 첫째 자리 내림
ceilNum=Math.ceil(num), // 소수점 첫째자리 올림
rndNum=Math.random(), // 0과 1 사이의 난수 발생
piNum=Math.PI; // 원주율 상수를 반환

document.write(maxNum,"<br>");
document.write(minNum,"<br>");
document.write(roundNum,"<br>");
document.write(floorNum,"<br>");
document.write(ceilNum,"<br>");
document.write(rndNum,"<br>");
document.write(piNum,"<br>");

Math.random()*10;   