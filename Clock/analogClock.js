setInterval(setClock, 1000)
// setTimeout() 사용법 - 어떤 코드를 바로 실행하지 않고 일정 시간 기다린 후 실행햐야하는 경우
// setTimeout(() => console.log("2초 후에 실행됨"), 2000);
// 콘솔에 2초 후에 실행됨 출력 

// setInterval() 사용법 - 웹페이지의 특정 부분을 주기적으로 업데이트해줘야 하거나, 어떤 API로 부터 변경된 데이터를 주기적으로
// 받아야와야 하는 경우 
// setInterval(() => console.log(new Date()), 2000);
// 출력결과 - Wed Aug 17 2022 15:00:28 GMT+0900 (한국 표준시)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// jquery 에서는 $() 함수를 사용해서 표현 
// ex) const $p = jQuery("p"); , const $p = $("p");

// querySelector() => jQuery 와 동일한 방식으로 css 선택자를 넘겨서 원하는 HTML 요소를 찾음 
// querySelector() - 해당하는 첫번째 요소 , querySelectorAll() - 해당하는 여러요소 
// const pEl = document.querySelector("p"); , const pEl = document.querySelectorAll("p");

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
// setProperty() - css 선언 블록에서 새 CSS 속성 설정 또는, 기존 css 속성 수정 
// object.setProperty(propertyname, value, priority)
// propertyname = 필수, 설정할 속성명 , value = 선택, 새 속성값 , priority = 선택, css 적용 우선순위(!improtant) 표시여부
// "important" : 가장 먼저 적용 , "undefined" : 미정 , " ": 


setClock()
