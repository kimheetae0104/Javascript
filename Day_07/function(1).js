// 기본 함수 정의문 
var count = 0;

myFNC();

function myFNC(){
    count++;
    document.write("helle"+count,"<br>");
}

myFNC();

var theFNC = function(){
    count++;
    document.write("bye"+count+"<br>");
}
theFNC();

var color = ["white", "yellow","aqua","purple"];

var i = 0;
function changeColor(){
    i++;
    if(i>=color.length){
        i=0;
    }
    var bodyTag = document.getElementById("theBody");
    bodyTag.style.backgroundColor = color[i];
}

//매개변수가 있는 함수 정의문 
function myFnc(name,area){
    document.write("안녕하세요"+name+"입니다","<br>");
    document.write("사는 곳은"+area+"입니다","<br><br>");
}
myFnc("홍당무","강건너");

myFnc("까두기", "동네");

var rightId = "korea";
var rightPw = "1234";
function login(id,pw){
    if(id==rightId){
        if(pw==rightPw){
            document.write(id+"님 방문을 환영합니다");
        }else{
            alert("잘못된 비밀번호입니다.");
        }       
    }else{
        alert("존재하지 않는 아이디입니다.");
    }
}
var userId = prompt("아이디를 입력하세요","");
var userPW = prompt("패스워드를 입력하세요","");

login(userId,userPW);

//매개변수 없이 함수에 전달된 값 받아오기

function sum(){
    var sum = arguments[0]+arguments[1]+arguments[2];

    document.write(sum);
}
sum(10,20,30);

function sum(){
    var sum = 0;
    for (var i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }

    document.write(sum);
}

sum(10,20,30);

