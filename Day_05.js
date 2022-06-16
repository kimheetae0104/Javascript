document.write("<h1>컴퓨터 가위, 바위, 보 맞추기</h1>");

var game = prompt("가위, 바위, 보 중 선택하세요","가위");
var gameNum;
switch(game){
    case "가위":
        gameNum=1;break;
    case "바위":
        gameNum=2; break;
    case "보":
        gameNum=3; break;
    
default: alert("잘못 입력했습니다");
    location.reload();
}
var com= Math.ceil(Math.random()*3);
document.write(com);

if(gameNum == com){
    document.write("바위");
}else{
    document.write("보");
}

//배열객체
//방식1
var d = new Array();
d[0]=30;
d[1]="따르릉";
d[2]=true;
//방식2
var d = new Array(30, "따르릉", true);
//방식3
var d=[30, "따르릉", true];

//배열 객체에 저장된 데이터 불러오기
var arr = [30,"따르릉",true];

document.write("<h3>배열값 가져오기-1</h3>");
document.write(arr[0],"<br>");
document.write(arr[1],"<br>");
document.write(arr[2],"<br>");

document.write("<h3>배열값 가져오기-2</h3>");
for(var i = 0; i<arr.length; i++){
    document.write(arr[i],"<br>");
}

document.write("<h3>배열값 가져오기-3</h3>");
for(i in arr){
    document.write(arr[i],"<br>");
}

var arr_1 =["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

var result = arr_1.join("-");
console.log(result);
// 배열에 저장된 값을 지정한 문자로 연결하여 하나의 문자열을 반환
result = arr_1.concat(arr_2);
console.log(result);
//2개의 배열을 하나의 배열로 만들어 반환
result = arr_1.slice(1,3);
console.log(result);
//배열의 1번 이전의 인덱스 요소를 잘라내로 나머지 값을 반환 
arr_1.sort();
console.log(arr_1);
//배열의 값을 오름차순으로 정렬합니다.
arr_2.reverse();
console.log(arr_2);
//배열 순서를 거꾸로 뒤집기
var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2,1,"서초","역삼");
console.log(greenArr);
//2번 인덱스부터 1개의 데이터를 삭제 그럼 다음 "서초", "역삼"을 삽입
var data1 = yellowArr.pop();
// yellowArr 배열 마지막 인덱스의 데이터를 data1에 저장
var data2 = yellowArr.shift();
// yellowArr 배열 가장 앞쪽 인덱스의 데이터를 data2에 저장
yellowArr.push(data2);
//data2에 저장된 데이터를 yellowArr 배열의 마지막 인덱스에 밀어 넣음
console.log(yellowArr);

yellowArr.unshift(data1);
//data1에 저장된 데이터를 yellowArr 배열의 가장 앞쪽 인덱스에 밀어 넣음
console.log(yellowArr);

//문자열 객체
var t = "hello javascript";

var t = "Hello Thnak you good luck to you";
document.write(t.charAt(16),"<br>"); //인덱스 16에 저장된 문자를 불러옴
document.write(t.indexOf("you"),"<br>"); //문자열 왼쪽에서부터 제일 먼저 발견된 "you"의 인덱스 값 반환
document.write(t.indexOf("you",16),"<br>"); //문자열 인덱스 16 위치부터 제일 먼저 발견된 "you" 의 인덱스 값을 반환
document.write(t.lastIndexOf("you"),"<br>"); //문자열 오른쪽에서부터 왼쪽 방향으로 제일 먼저 발견된 "you" 의 인덱스 값 반환
document.write(t.lastIndexOf("you",25),"<br>"); //문자열 인덱스 25부터 왼쪽 방향으로 제일 먼저 발견된 "you"의 인덱스값을 반환
document.write(t.match("luck"),"<br>"); // 문자열 왼쪽에서부터 제일 먼저 발견된 "luck"과 일치되는 문자열 찾아 반환
document.write(t.search("you"),"<br>"); //문자열 왼쪽에서부터 제일 먼저 발견된 "you"의 인덱스값을 반환
document.write(t.substring("21,4"),"<br>"); // 문자열 인덱스 21부터 네글자를 가져옴 

var userName = prompt("당신의 영문 이름은?","");

var upperName = userName.toUpperCase();
document.write(upperName,"<br>");

var userNum = prompt("당신의 연락처는?","");
var result = userNum.substring(0, userNum.length-4)+"****";
document.write(result,"<br>");

var userEmail=prompt("당신의 이메일 주소는?","");
var arrUrl = [".co.kr",".com",".net",".or.kr",".go.kr"];

var check1 = false;
var check2 = false;

if(userEmail.indexOf("@")>0){check1 = true;} 
//이메일 유효성을 검사하여 "@" 를 정상적으로 작성했으면 check1 에 true를 저장

for(var i = 0; i < arrUrl.length; i++){
    if(userEmail.indexOf(arrUrl[i])>0){
        check2 = true;
    }
}
if(check1 && check2){
    document.write(userEmail);
}else{
    alert("이메일 형식이 잘못되었습니다");
}

