//Unit1.4：實戰練習：印出 1-100 的奇數

for (i from 1 to 100) do
  if (n mod 2 ===1) then
//取餘數 = 奇數
    print i
  end if
 end for
 =========================================

//Unit1.5：實戰練習：fizz buzz 
// 3 的倍數 印 fizz
// 5 的倍數 印 buzz
// 3 和5 的倍數 印 fizzbuzz

for (i from 1 to n) do
  if (i % 15 ===0) print "fizzbuzz"
  // % 等於整除
  else if (i % 3 ===0) print "fizz"
  else if (i % 5 ===0) print "buzz"
end for

=========================================
//Unit1.6：實戰練習：找最小值 
//從陣列找最小值
let 最小的牌 = 第一張牌
for (i from 1 to n) do
翻開第 i 張牌
  if (第 i 張牌比最小張牌的還小) do
   最小的牌 = 第 i 張牌
   end if 
end for
/* 進化成 */

let min = arr[0]
for (i form 0 to n-1) do 
  if (arr[i] < min) do  
    min = arr[i]
  end if
end for 
 
=========================================
//作業檢討：Project1 字串反轉 

 
//給一個字串 str，請輸出 str 反過來的結果
//範例輸入：hello
//範例輸出：olleh

//PS. 可以用 str[i] 取得第 i 個字，例如說 str="abc"，str[0] 就是 'a'


let s =''
for (i for n-1 to 0) do
   s += str[i] 
   //x += y	x = x + y
   //s += str[i]	s = s + str[i]
end for
print s
 
 
=========================================
//作業檢討：Project1 陣列總和 
//給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列加總的結果（總和保證不超過 int 範圍）
//範例輸入：[1, 2, 3]
//範例輸出：6


let sum = 0
for (i from 0 to n-1) do
  sum += arr[i]
end for
print sum
//作業檢討：Project1 找最大值 
//給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列中的最大值
//範例輸入：[1, 2, 3]
//範例輸出：3


let max = arr[0]
for (i from 0 to n-1) do
  if (arr[i] > max) do
    max = arr[i]
  end if
end for
print max
 
 
//作業檢討：Project2 找次小值
1. 找次小值
給一個陣列，裡面全都包含了數字（整數），請輸出陣列中的次小值
範例輸入：[1, 2, 3]
範例輸出：2

let arr = [10, 8, 6]
let min = Infinity
let min2 = Infinity
for(let i=0; i<arr.length; i++) {
  if (arr[i] < min) {
    min2 = min
    min = arr[i]
  } else if (arr[i] < min2) {
    min2 = arr[i]
  }
}
console.log(min, min2)
 
//作業檢討：Project2 大小寫互換 
給一個字串，請把字串裡的大小寫互換
範例輸入：hELLo
範例輸出：HellO
/*
1. 設 ans 為空字串
2. 迴圈第一圈 , i 會從 0~4
3. i=0
4. code = str[0] 的 charcode = 104
5. 判斷是否為小寫
6. 是
7. ans += 'H'
8. 下一個迴圈 i=1
9. code = str[0] 的 charcode = 69
10. 判斷是否為小寫
11. 判斷是否為大寫
12. 是, ans += 'e'
13. 下一個迴圈 i=2
14. code = str[2] 的 charcode = 76
15. 判斷是否為小寫
16. 判斷是否為大寫
17. 是, ans += 'l'
18. 下一個迴圈 i=3
19. code = str[3] 的 charcode = 76
20. 判斷是否為小寫
21. 判斷是否為大寫
22. 是, ans += 'l'
23. 下一個迴圈 i=4
24. code = str[4] 的 charcode = 111
25. 判斷是否為小寫
26. 是, ans += 'O'
27. 下一個迴圈 i=5
28. 迴圈結束
29. 印出 ans

*/


let str = "hELLo"
let ans = ''
for(let i=0; i<str.length; i++) {
  let code = str.charCodeAt(i)
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32)
  } else if (code >= 65 && code <= 90) {
    ans += String.fromCharCode(code + 32)
  } else {
    ans += str[i]
  }
}
console.log(ans)
//作業檢討：Project2 印出因數 
給一個正整數，請輸出他的所有因數
範例輸入：15
範例輸出：

1
3
5
15


let num = 30
for(let i=1; i<=num; i++) {
  if (num % i === 0) {
    console.log(i)
  }
}