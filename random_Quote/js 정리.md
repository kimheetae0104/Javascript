

fetch() 함수로 원격 API 호출하기

JavaScript API, Markup => JAM stack 

라이브러리?

# fetch 사용법

fetch() 함수는 첫번째 인자로 URL, 두번째 인자로 옵션 객체를 받고, Promise 타입의 객체를 반환합니다. 
반환된 객체는, API 호출이 성공했을 경우에는 응답(response) 객체를 resolve하고, 실패했을 경우에는 예외(error) 객체를 reject합니다.

fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
  
옵션(options) 객체에는 HTTP 방식(method), HTTP 요청 헤더(headers), HTTP 요청 전문(body) 등을 설정해줄 수 있습니다. 
응답(response) 객체로 부터는 HTTP 응답 상태(status), HTTP 응답 헤더(headers), HTTP 응답 전문(body) 등을 읽어올 수 있습니다.

참고로 fetch() 함수는 엄밀히 말해, 브라우저의 window 객체에 소속되어 있기 때문에 window.fetch()로 사용되기도 합니다.

https://www.daleseo.com/js-window-fetch/

... 꽤나 공부할 내용이 많은 것 같다 

# 
