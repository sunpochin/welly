// Q1: JavaScript: 字串反轉
// function reverseString(str) {
//   // 實作你的解答	
// }
// console.log(reverseString("Hello")); // 預期輸出: "olleH”

// Ans.
function reverseString(str) {
  // 將字串轉換成陣列，反轉陣列，再將它轉換回字串
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));


// Q2: JavaScript: 陣列過濾
// 問題：寫一個JavaScript函式，接受一個數字陣列，並返回該陣列中所有大於5的數字。 
// 範例：
// function filterNumbersGreaterThanFive(numbers) {
//   // 實作你的解答
// }
// const numbers = [2, 8, 4, 10, 1, 7];
// console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]

// Ans.
function filterNumbersGreaterThanFive(numbers) {
  // 實作你的解答
  return numbers.filter(function (number) {
    return number > 5;
  });
}
const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]


// Q3. JavaScript: 重構
// 問題：重構這段程式碼並說明原因
// function formatName(firstName, lastName) {
//   let formattedName = '';
//   if (firstName) {
//     formattedName += firstName;
//   }
//   if (lastName) {
//     formattedName += ' ' + lastName;
//   }
//   return formattedName;
// }

// Ans. 原因：filter(Boolean) 這樣的效果是去掉那些被轉換為 false 的元素，可以被用來過濾掉陣列中的 undefined、null 和空字串等偽值。join 用來做 += 的字串合併。

function formatName(firstName, lastName) {
  return [firstName, lastName].filter(Boolean).join(' ');
}

const result1 = formatName('Sam', 'Holmes');
const result2 = formatName('', 'Holmes');
const result3 = formatName('Sam', '');
const result4 = formatName('Sam', undefined);
const result5 = formatName(0, 'Holmes');
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

