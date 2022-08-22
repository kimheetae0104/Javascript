### addEventListener 자주 사용하는 이벤트의 종류
* click – 마우스버튼을 클릭하고 버튼에서 손가락을 떼면 발생한다.
* mouseover – 마우스를 HTML요소 위에 올리면 발생한다.
* mouseout – 마우스가 HTML요소 밖으로 벗어날 때 발생한다.
* mousedown – 클릭을 하기 위해 마우스버튼을 누르고 아직 떼기 전인 그 순간, HTML요소를 드래그할 때 사용할 수 있다.
* mouseup – 마우스버튼을 떼는 그 순간, 드래그한 HTML요소를 어딘가에 놓을 때 사용할 수 있다.
* mousemove – 마우스가 움직일때마다 발생한다. 마우스커서의 현재 위치를 계속 기록하는 것에 사용할 수 있다.
* focus – HTML요소에 포커스가 갔을때 발생한다.
* blur – HTML요소가 포커스에서 벗어났을때 발생한다.
* keypress – 키를 누르는 순간에 발생하고 키를 누르고 있는 동안 계속해서 발생한다.
* keydown – 키를 누를 때 발생한다.
* keyup – 키를 눌렀다가 떼는 순간에 발생한다.
* load – 웹페이지에서 사용할 모든 파일의 다운로드가 완료되었을때 발생한다.
* resize – 브라우저 창의 크기를 조절할때 발생한다.
* scroll – 스크롤바를 드래그하거나 키보드(up, down)를 사용하거나 마우스 휠을 사용해서 웹페이지를 스크롤할 때 발생한다. 페이지에 스크롤바가 없다면 이벤트는 발생하지 않다.
* unload – 링크를 클릭해서 다른 페이지로 이동하거나 브라우저 탭을 닫을 때 혹은 브라우저 창을 닫을 때 이벤트가 발생한다.
* change – 폼 필드의 상태가 변경되었을 때 발생한다. 라디오 버튼을 클릭하거나 셀렉트 박스에서 값을 선택하는 경우를 예로 들수 있다.
    
### functions 함수 문법 

* 함수선언 
function functionName() {
    console.log('Hello World!');
};
function은 함수 생성 , functionName은 함수의 이름, 해당함수의 성격을 요약 중괄호 내의 명령어는 함수를 불러왔을 때 실행

* 함수 불러오기
console.log(functionName()); // Output: Hello World!

* Parameter(매개변수) , Argument(인자)
어떤 함수는 매개변수를 갖고, 그 매개변수를 함수 실행에 사용하기도 한다.

function calculateArea(widht, height) {
    console.log(width * height);
}

함수를 정의하는 괄호 내의 (width, height)가 매개변수
코드를 불러와 실행할 때는, 이 매개변수가 인자의 성격을 갖는다.
보다 정확하게 '값으로서의 인자'의 성격을 갖는다.

* Default Parmeter(기본값 매개변수)
Default Parameter는 매개변수의 기본값을 미리 정해놓는 것이다.
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`);
}

greeting('Jean') // Ouput : Hello, Jean!

* 함수 표현
const calculateArea = function(width * height) {
    const area = width * height;
    return area;
}

위의 함수와 마찬가지로 함수의 이름은 대게 생략된다. 대신 변수의 이름을 통해 대신 함수를 특징지을 수 있다.
이처럼 이름이 없는 무명 함수라고 한다.
이 함수를 불러올 때는 변수이름과 함수의 인자를 입력하면 된다.

calculateArea(widht, height)

* Arrow Function(화살표 함수)
Arrow Function은 ES6의 기능 중 하나 , 간단한 기호로서 함수를 표현하기 때문에 함수를 선언할 때 function 을 안써도 됨

const rectangleArea = (widht, height) => {
 let area = width * height;
 return area;
};

const squreNum = (num) => {
 return num * num;
};
// 위의 함수를 아래와 같이 변경할 수 있다. (소괄호와 중괄호, return명령어가 없어짐)

const squarNum = num => num * num;

JavaScript syntax fatterns
Callback Function
콜백 함수를 검색하면 대게의 경우 '비동기 처리'에 대한 말이 함께 나타난다.
콜백 함수가 비동기 처리를 위해서 사용되기 때문에 그렇다.

콜백 함수는 다른 함수 안에서 인자로서 실행되는 함수이다.
이 콜백 함수는 어떤 이벤트가 발생하는 특정한 시점에 실행된다.

콜백은 함수 내에 매개변수로서 들어갈 수 있다.
매개변수인 콜백은 함수 형태로 실행될 수 있다.

// 콜백 함수가 되는 매개변수를 지정한다.
function multifly(a, b, callback) {
   var sum = a * b;
   callback(sum)
}
위의 콜백 함수는 아래와 같이 이용될 수 있다.

// mutifly 함수에 무명 함수를 인자로 전달한다.
multifly(2, 3, function(result) {
   console.log(result);
});
multifly 함수의 인자에 2, 3, 함수 result를 매개변수 값으로 입력했다.
따라서 multifly 함수가 순서대로 진행되면서,
sum = 2 * 3 = 6 을 계산하고,
그 sum 값을 콜백함수로서 받고(호출하고),
console.log(result)를 통해 화면에 출력한다.

https://velog.io/@jeanbaek/JavaScript-%ED%95%A8%EC%88%98-%EB%AC%B8%EB%B2%95-%ED%8C%A8%ED%84%B4-%EC%A0%95%EB%A6%AC

###  var , const , let 차이 

### map() 메서드
map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 메서드이다.

for of 문이나 forEach처럼 배열 내 요소들을 반복하는 반복문의 한 종류인데, 조금 독특한 부분은 매 반복마다 return 되는 결과에 따라 새로운 배열을 만들어낸다는 것이다.

const myArr = [1, 2, 3, 4, 5];
const newMyArr = myArr.map((currentElement, index, array) => {
    return currentElement *2
});

console.log(newMyArr); // [2, 4, 6, 8, 10]

map() 메서드는 파라미터로 콜백함수를 받는데, 그 콜백 함수의 파라미터는 요소, index 그리고 현재 map 메서드를 호출한 배열이다.
세번째 배열은 잘 사용되지 않고 일반적으로 첫 번째 요소와, 두 번째 index가 많이 사용된다.

말 그대로 요소는, 반복이 일어날 때마다 0번 index부터 해당하는 각 요소가 할당되고, index 또한 해당 index인 것

결과적으로 map은 메서드를 호출한 배열의 길이 만큼의 새로운 배열을 만들어내는 게 핵심인데, 콜백 함수의 return 값을 통해 새로운 배열들의 각 요소를 변형할 수 있다는 특징이 있는 것 

const myArr = [1, 2, 3, 4, 5];
const assignMyArr = myArr;
const mapMyArr = myArr.map((el) => {
    return el
});

console.log(myArr); // [1, 2, 3, 4, 5]
console.log(assignMyArr); //[1, 2, 3, 4, 5]
console.log(mapMyArr); // [1, 2, 3, 4, 5]

3번째 줄에서 map 메서드의 콜백 함수를 실행할 때, 사용하지 않는 파라미터는 생략할 수 있다.
그리고 그냥 요소값을 return 하게 되면 똑같은 배열이 만들어지는데, 그렇다 하더라도 map메서드를 통해 생성된 배열은 말 그대로 새로운 배열이기 때문에, 배열의 요소들이 서로 같더라도 아래와 같이 각 배열들을 일치 비교할 경우 결괏값이 서로 차이가 난다.

console.log(myArr === assignMyArr); // true
console.log(myArr === mapMyArr); // false

끝으로 만약 map메서드의 콜백 함수가 아무것도 리턴하지 않을 경우에는, 호출한 배열의 길이만큼의 undefined가 채워진 배열이 리턴된다.

https://bigtop.tistory.com/57

### forEach() 메서드 
forEach() 메서드는 배열에 활용이 가능한 메서드로, 파라미터로 주어진 함수를 배열 요소 각가에 대해 실행하는 메서드이다.
map() 메서드와 거의 비슷하지만 차이점은 따로 return 하는 값이 없다는 점이다. 

forEach메서드도 map메서드와 동일하게 파라미터로 콜백 함수를 받는데, 그 콜백 함수의 파라미터는 요소, index 그리고 현재 map 메서드를 호출한 배열이다. 

예시 
const myArr = [1, 2, 3, 4, 5];

const newMyArr = myArr.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`};
    console.log(array);
});

console.log(newMyArr); //undefined




참고로, forEach의 상위호환이라고 해서 배열의 요소들을 순회할 때 그냥 무조건 map 메서드를 활용하는 경우를 본 적이 있었는데,

개인적으로는 return 값으로 새로운 배열이 필요하지 않는 경우라면 forEach 메서드를 활용하는 것이 옳다고 생각한다.

https://bigtop.tistory.com/58
