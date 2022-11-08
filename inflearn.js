// 리턴값으로의 함수 
function cal(mode){
   var funcs = { 
      'plus' : function(left, right){return left + right}, 
       'minus' : function(left, right){return left - right}
     }  return funcs[mode]; 
} 
alert(cal('plus')(2,1)); alert(cal('minus')(2,1));

//배열로서의 함수 
﻿function cal(mode){
   var funcs = { 
      'plus' : function(left, right){return left + right}, 
       'minus' : function(left, right){return left - right}
     }  return funcs[mode]; 
} 
alert(cal('plus')(2,1)); alert(cal('minus')(2,1));

﻿function sortNumber(a,b){ // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다. 
return b-a; } 
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1]; 
alert(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]

﻿function factory_movie(title){
  return { get_title : function (){ 
   return title; }, 
  set_title : function(_title){ title = _title } 
  } 
}
ghost = factory_movie('Ghost in the shell'); 
matrix = factory_movie('Matrix'); 
alert(ghost.get_title()); 
alert(matrix.get_title()); 
ghost.set_title('공각기동대'); 
alert(ghost.get_title());
alert(matrix.get_title());..
//클로저 응용
﻿
var arr = [] 
for(var i = 0; i < 5; i++){ 
arr[i] = function(){ return i; } } 

for(var index in arr) { 
console.log(arr[index]()); }

var arr = [] 
for(var i = 0; i < 5; i++){ arr[i] = function(id) { 
return function(){ return id; } }(i); }
 
for(var index in arr) { 
console.log(arr[index]()); } /* 결과 0 1 2 3 4 */

﻿
//arguments
﻿function sum(){ 
  var i, _sum = 0; for(i = 0; i < arguments.length; i++){ 
  document.write(i+' : '+arguments[i]+'<br />'); _sum += arguments[i]; } 
  return _sum; } 
document.write('result : ' + sum(1,2,3,4));

//매개변수의 수
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length
    );
}
function one(arg1){
    console.log(
        'one.length', one.length,
        'arguments', arguments.length
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length
    );
}
zero(); // zero.length 0 arguments 0 
one('val1', 'val2');  // one.length 1 arguments 2 
two('val1');  // two.length 2 arguments 1

//함수의 호출
ex 1)
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
alert(sum.apply(o1)) // 6
alert(sum.apply(o2)) // 185
