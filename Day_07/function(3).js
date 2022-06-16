// 함수 스코프 

var score = 10;

function myFnc(){
    var socre =50; //함수 스코프에서 지역 변수 데이터를 가져옴

    alert(score); //50
}

myFnc();

alert(score); //10 
//함수 스코프 밖에서 전역 변수 데이터를 가져옴 

var num = 100;
function menu(){
    num += 100;
    alert(num);
}
menu();

function menu(){
    alert(num);
}
// 위와 같이 코드를 작성하면 함수 명이 같아서 위에 코드를 아래 코드가 덮어버린다.
// 함수명이 같지 않게 조심!

// 즉시실행함수

(function(){
    var num = 100; //지역 변수  
    function menu(){ // 지역 함수 
        num +=100;
        alert(num);
    }
    menu();
}());

(function(){
    var num = 100;
    function menu(){
        alert(num);
    }
}());
