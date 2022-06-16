// 브라우저 객체 모델
//팝업 창 띄우기 
window.open("http://www.easyspub.com/","easyspub", "width=350,height=400,left=50, top=10.scrollbars=no");

//alert
//경고 창을 나타낼 때 사용
alert("잘못 입력했습니다.");

//prompt
//질의응답 창
prompt("당신의 연령은?","0");

//confirm()
// 확인/취소 창

confirm("정말로 삭제하시겠습니까?");

//setinterval(), clearlnterval()
//var 참조변수 = setInterval(function(){코드}, 시간 간격(ms));
//var 참조변수 = setInterval("코드",시간 간격(ms));
var intv = setInterval(function(){i++;}, 3000);
var intv = setInterval("i++",3000);

//clearInterval(참조 변수);

var addNum=0;
var subNum=1000;
//3초(3,000)간격으로 반복 실행 addNum의 값이 1씩 증가
var auto_1 = setInterval(function(){
    addNum++;
    console.log("addNum:" + addNum);
}, 3000);

//3초(3,000)간격으로 반복 실행 subNum의 값이 1씩 감소
var auto_2 = setInterval(function(){
    subNum--;
    console.log("subNum:"+ subNum);
},3000);

//setTimeout(), clearTimeout()
var tim = setTimeout(function(){i++;},5000);
var tim = setTimeout("i++",5000);

clearTimeout(tim);

var addNum = 0;
var auto = setTimeout(function(){
    addNum++;
    console.log(addNum);    
},5000);

//screen 객체, location객체, history 객체

var info = navigator.userAgent.toLowerCase();
var osImg = null;

if(info.indexOf('windows')>=0){
    osImg = "windows.png";
}else if(info.indexOf('macintosh')>=0){
    osImg = "macintosh.png";
}else if(info.indexOf('iphone')>=0){
    osImg = "iphone.png";
}else if(info.indexOf('android')>=0){
    osImg="android.png";
}

document.write("<img src =\"images/"+osImg+"\">","<br>");
var scr = screen;
var sc_w = scr.width;
var sc_h = scr.height;

document.write("모니터해상도너비:" + sc_w+"px","<br>");
document.write("모니터해상도 높이:"+ sc_h+"px","<br>");
