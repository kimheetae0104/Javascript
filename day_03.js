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