//데이터를 반환 강제 종료하는 return문

function sum(num1,num2){
    return num1 + num2
}

var result = sum(10,20);
document.write(result);

function testAvg(arrData){
    var sum = 0;
    for (var i = 0; i<arrData.length; i++){
        sum += Number(prompt(arrData[i]+"점수는?","0"));

    }
    var avg = sum / arrData.length;
    return avg;
}

var arrSubject = ["국어", "수학"];
var result = testAvg(arrSubject);

document.write("평균 점수는" + result + "점입니다.");

//8개의 이미지 갤러리 만들기
var num =1;
function gallery(direct){
    if(direct){
        if(num==8)return;
        num++;
    }else{
        if(num==1)return;
        num--;
    }
    var imgTag = document.getElementsById("photo");
    imgTag.setAttribute("src","images/pic_"+ num + ".jpg");
} //setAttribute("속성값", "새값") 메서드는 선택한 태그의 지정한 속성을 새 값으로 변경

//재귀 함수 호출

var num = 0;
function testFnc(){
    num++;
    document.write(num,"<br>");
    if(num == 10) return;

    testFnc();
}

testFnc();