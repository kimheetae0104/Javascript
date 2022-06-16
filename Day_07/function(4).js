// 객체 생성자 함수

function CheckWeight(name,height,weight){
    this.userName =name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
    this.getInfo = function(){
        var str = ""
        str+= "이름 : " + this.userName + ",";
        str+= "키 : " + this.userHeight + ",";
        str+= "몸무게: " + this.userWeight + "<br>";
        return str; 
    }
    this.getResult = function(){
        this.minWeight = (this.userHeight -100)*0.9 -5;
        this.maxWeight = (this.userHeight -100)*0.9 +5;
        
        if(this.userWeight >= this.minWeight
            && this.userWeight <= this.maxWeight){
                return "정상 몸무게입니다.";
            } else if(this.userWeight < this.minWeight){
                return "저체중 입니다.";
            }else{
                return "과체중 입니다.";
            }
    }
}

var jang = new CheckWeight("장보리", 168, 62);
var park = new CheckWeight("박정숙", 180, 82);
console.log(jang);
console.log(park);

document.write(jang.getInfo());
document.write(jang.getResult());

// 메모리 절약 프로토타입 

function CheckWeight(name,height,weight){
    this.userName =name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
}
CheckWeight.prototype.getInfo = function(){
        var str = ""
        str+= "이름 : " + this.userName + ",";
        str+= "키 : " + this.userHeight + ",";
        str+= "몸무게: " + this.userWeight + "<br>";
        return str; 
}
CheckWeight.prototype.getResult = function(){
this.minWeight = (this.userHeight -100)*0.9 -5;
this.maxWeight = (this.userHeight -100)*0.9 +5;

    if(this.userWeight >= this.minWeight){
        return "정상 몸무게입니다.";
    }else if(this.userWeight < this.minWeight){
        return "저체중 입니다.";
    }else{
        return "과체중 입니다.";
    }
}



var jang = new CheckWeight("장보리", 168, 62);
var park = new CheckWeight("박정숙", 180, 82);
console.log(jang);
console.log(park);

document.write(jang.getInfo());
document.write(jang.getResult());

document.write(jang.getResult === park.getResult);
// jang.getResult === park.getResult true 이면 두 객체가 같은 함수를 사용함을 의미

