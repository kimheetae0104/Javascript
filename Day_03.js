// 선택문
/* var 변수 = 초깃값;
    switch(변수){
        case 값1 : 코드1;
        break;
        case 값2 : 코드2;
        break;
        case 값3 : 코드3;
        
        default: 코드5;
    }
*/

let site = prompt("네이버, 다음, 네이트, 구글 중 \
    즐겨 사용하는 포털 검색 사이트는?", ""); //문자열 데이터는 줄을 바꾸면 오류가 발생한다 
                                        //하지만 \ 와 함께 코드를 작성하면 문자열의 줄을 바꿔도 오류가 발생하지 않음
let url;

switch(site){
    case "구글" : url = "www.gogle.com";
    break;
    case "다음" : url = "www.daum.net";
    break;
    case "네이버" : url = "www.naver.com";
    break;
    case "네이트" : url = "www.nate.com";
    break;
    default:alert("보기 중에 없는 사이트입니다");
}
if(url) location.href = "http://" + url; //저장된 주소로 이동

// 반복문 while
/* var 변수 = 초깃값;
    while(1,3 조건식){
        2. 자바스크립트 코드;
        증감식;
    }
*/

var i = 1;
while(i <= 30){
    if(i%2 == 0&& i %6==0){
        document.write(i,"<br>");
    }
    i++;
}

var i = 20;
while(i >= 10){
    if(i % 2 == 0){
        document.write("<p class = 'blue'>"+ i +"</p>"); // p class 로 개별적 css 가능
    }else{
        document.write("<p class = 'red'>"+ i + "</p>");
    }
    i--;
}
// do while 문
/* var 변수 = 초깃값;
    do{
        자바스크립트 코드;
        증감식;
    }while(조건식)
*/
var i = 10;
do{
    document.write("hello");
}while( i < 3)
//for 문
/* for(초깃값; 조건식; 증감식){
    자바스크립트 코드;
}
*/
for(var i = 1; i <=100; i++){
    if(i % 5 == 0 && i % 7 != 0 ){
        document.write("<p class ='red'>"+ i + "</p>");
    }else if(i % 7 == 0 && i % 5 != 0){
        document.write("<p class='green'>"+i+"</p>");
    }else if(i % 7 ==0 && i % 5==0){
        document.write("<p class='aqua'>"+i+"</p>");
    }
}
// break 문 & continue문
for(var i = 1; i <= 10; i++){
    if(i == 6) break; // i 의 값이 6이면 break문으로 종료
    document.write(i, "<br>");
}
document.write("====THE END====");

for(var i = 1; i <= 10; i++){
    if(i%2 == 0)continue
    document.write(i,"<br>")
}
document.write("=====THE END=====");

//중첩 for 문
for(var i = 1; i <= 3; i++){
    for(var k = 1; k <= 2; k++){
        document.write(i + "행" + k + "열", "<br>");
    }
    document.write("<br>");
}
