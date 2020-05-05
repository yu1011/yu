//fuction 帶參數
function count (oneNum, towNum){
    var total = oneNum * towNum
    console.log('總共是'+ total +'元');
}
count(50,60);



//fuction 全域變數
var total; //var 寫在function外面
function count (oneNum, towNum){
    total = oneNum * towNum
    console.log('總共是'+ total +'元');
}
count(50,60);

console.log(total);

//fuction 區域變數


function count (oneNum, towNum){
   var total = oneNum * towNum //var 寫在function裡面
    console.log('總共是'+ total +'元');
}
count(50,60);

console.log(total);
 

//計算-點擊後會有效果

document.getElementById('countId').onclick = function (){
 var hamNum = document.getElementById('hamNumId').Value; //撈裡面的值
 var cokeNum = document.getElementById('cokeNumId').Value; //撈裡面的值
 alert(hamNum);
 alert(cokeNum);
}
//typeof
typeof(要查詢的值)


// string 轉成 字串
parseInt


//點擊後,計算-兩項相加 + 
document.getElementById('countId').onclick = function(){
    var hamNum = parseInt(document.getElementById('hamNumId').Value); //string 轉成 字串 + 撈裡面的值
    var cokeNum = parseInt(document.getElementById('cokeNumId').Value); //撈裡面的值

    console.log(hamNum+cokeNum);

}

//return

function getHamPrice(num){
    var hamPrice = 50;
    var total = hamPrice * num;
    return total;
}

var tom = getHamPrice(20); //帶入tom買20個漢堡 return到上面公式 不須在多寫公式
var tom = getHamPrice(20)*num*hamPrice; //非return的寫法 後面要再多寫

console.log(tom);
