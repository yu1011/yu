var fizzBuzz = function(n) {
    let arrayFizzBuzz = ""
    for(let i=1;i<=n;i++) {
    let combineChar = String(i)
    
     if(i%3 === 0 && i%5 === 0){
 combineChar = "FizzBuzz"}
    
    else if(i%3 ===0){
    combineChar = "Fizz"
   } else if(i%5 === 0) {
    combineChar = "Buzz"
   } else if(i%3 === 0 && i%5 === 0){
 combineChar = "FizzBuzz"
    }
   arrayFizzBuzz !== "" && (arrayFizzBuzz += ",")
   arrayFizzBuzz += combineChar;
    }
    return arrayFizzBuzz.split(",")

};
