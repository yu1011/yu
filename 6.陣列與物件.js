 
// 陣列 Array介紹

var cornField = [8,9,10]
var cornField2 = cornField[1] //找第二個玉米田的資料 第一筆=0, 第二筆=1

console.log(cornField2);


// 陣列 - .push ||將原本陣列空資料 帶入新的值

var cornField = []; //一開始空值
cornField.push(8); //帶入第一筆資料8
cornField.push(9); //帶入第二筆資料9
console.log(cornField);


// 陣列 - .push ||將原本陣列資料 改新的值

var cornField = []; //一開始空值
cornField.push(8); 
cornField.push(9);  

cornField[0] = 10; //將第一筆資料 改成10 
cornField[3] = 100; //將第四筆資料 改成100
console.log(cornField);


// 陣列 - .length ||查詢有多少陣列值

var cornField = []; //一開始空值
cornField.push(8); 
cornField.push(9);  

cornField[0] = 10;   
cornField[3] = 100;  

console.log('我總共有'+cornField.length+'個玉米田'); //查詢有多少陣列值
console.log(cornField);

//物件寫法教學 || 找出農場裡的第一隻小狗
var farm = {
    farmer:'卡斯柏',
    chick:15,
    dog:['詹姆士','旁得']
};

console.log(farm.dog[0]);

//物件+function 運用技巧 || 叫農夫回家吃晚飯
var farm = {
    farmer:'卡斯柏',
    chick:15,
    dog:['詹姆士','旁得'],
    goDinner: function(){
        console.log(farm.farmer + '開回家吃晚飯惹~');
    }
};
farm.goDinner(); //執行農夫回家吃晚飯

//物件+function 運用技巧 || 計算家禽有幾隻
var farm = {
    farmer:'卡斯柏',
    chick:15,
    dog:['詹姆士','旁得'],
    poultryTotal: function(){
        var num = farm.chick + farm.duck;
        console.log('我的農場總共有~' + num + '隻家禽');
    }
};
farm.poultryTotal(); //執行計算家禽有幾隻



//物件+陣列設計流程 ||撈出第二個農場的小狗詹姆士

var farms = [
{
farmer:'卡斯柏',
dogs: ['詹姆士', '皮皮'],
chick:15,
cornField: [6, 6, 6, 66, 6],
bison:9,
},
{
    farmer:'卡斯柏',
    dogs: ['詹姆士', '皮皮'],
    chick:115,
    cornField: [8, 9, 88, 77, 8],
    bison:9,
    }

];

console.log(farms[1].dogs[0])

