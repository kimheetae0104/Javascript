//Colors array
let colors=['blue','yellow','black','red',' brown','orange'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function(){
    //randomizer
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    //Math.random = 0 ~ 1 사이의 난수를 반환
    //Math.floor = 소수점 첫째 자리에서 무조건 내림하여 정수를 반환
    //Math.ceil = 소수점 첫째 자리에서 무조건 올림하여 정수를 반환
    //Math.floor(Math.random()*배열 데이터의 총개수); = 난수를 정수로 반환 받기
    //get container
    let container = document.getElementById('container');


    container.style.background = randomColor;
})