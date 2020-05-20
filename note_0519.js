//let用於宣告一個「只作用在當前區塊的變數」，初始值可選擇性的設定。
//let 可以宣告只能在目前區塊、階段或表達式中作用的變數。
//而 var 則是定義了一個全域變數，或是在整個 function 而不管該區塊範圍。

var fizzBuzz = function (n) {
    let arrayFizzBuzz = "";
     for (let i = 1; i <= n; i++) {
        let combineChar = String(i)

        if (i % 3 === 0 && i % 5 === 0) {
            combineChar = "FizzBuzz"
        }
        else if (i % 3 === 0) {
            combineChar = "Fizz"
        } else if (i % 5 === 0) { 
            combineChar = "Buzz" 
        } else if (i % 3 === 0 && i % 5 === 0) { 
            combineChar = "FizzBuzz" 
        } else if(arrayFizzBuzz !== "" && (arrayFizzBuzz += ",")){
            arrayFizzBuzz += ","
        }
        arrayFizzBuzz += combineChar;
    }
     return arrayFizzBuzz.split(",")

};

let ans = fizzBuzz(17)
console.log(ans)