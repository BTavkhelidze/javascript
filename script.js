//! 'task 1';

// function createCounter(n) {
//   return function (array) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(n++);
//     }
//   };
// }

// const counter = createCounter(10);

// counter(['a', 'b', 'c', 'd']);

//! task 2

// function Reducer(nums, fn, init) {
//   let val = init;
//   console.log(val, '1');
//   if (nums.length < 1) return init;
//   for (let i = 0; i < nums.length; i++) {
//     val = fn(val, nums[i]);
//   }
//   console.log(val, '3');
//   return val;
// }

// console.log(
//   Reducer(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr * curr;
//     },
//     100
//   )
// );

//! task 3 closure

// function outerFunction(greeting) {
//   function innerFunction(name) {
//     console.log(`${greeting} ${name}`);
//   }
//   return innerFunction;
// }

// const beqa = outerFunction('Hello');
// beqa('Beqa');

// const tamuna = outerFunction('Hi');
// tamuna('Tamuna');

//! task 4 closure

// function outerFunction(num) {
//   function innerFunction(num2) {
//     console.log(num + num2);
//   }
//   return innerFunction;
// }

// const result = outerFunction(5);
// result = (num2) { console.log(5 + num2) }
// result(10); // console.log(5 + 10)   = 15

//! task 5 closure

// function greeting(gretin) {
//   return function (name) {
//     console.log(`${gretin} ${name}`);
//   };
// }

// const person1 = greeting('hello');
// person1('dato');

// const person2 = greeting('hi');
// person2('tamuna');

// hi dato
// hello giorgi

//! task 6 closure

// function outerFunction() {
//   let num = 0;
//   return {
//     increase: function () {
//       num++;
//       console.log('increase', num);
//     },
//     reset: function () {
//
//        console.log(num);
//       num = 0;
//       console.log('reset');
//     },
//   };
// }

// const result = outerFunction();

// result.increase();
// result.increase();
// result.increase();

// result.reset();
// result.increase();

//! task 7
// function romanToInt(s) {
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
//       result -= roman[s[i]];
//     } else {
//       result += roman[s[i]];
//     }
//   }

//   return result;
// }

// console.log(romanToInt('III')); // 3
// console.log(romanToInt('LVIII')); // 58
// console.log(romanToInt('MCMXCIV')); // 1994

//! task 8

// const taxRate = 0.3;
// const phonePrice = 900;
// const spendingTrashold = 1300;
// const bankAccountBalance = Number(prompt('what is bank acount'));

// function price() {
//   const tax = phonePrice * taxRate;
//   const total = phonePrice + tax;
//   console.log(total);
//   if (bankAccountBalance > total && total < spendingTrashold) {
//     console.log('You can buy the phone');
//     return;
//   }

//   console.log('You can not buy the phone');
// }

// price();

//! task 9

// function composition(fn, x) {
//   if (fn.length < 1) return console.log(x, 'empty');

// let res = 0;
// for (let i = +fn.length - 1; i >= 0; i--) {
//   if (i == fn.length - 1) {
//     res += fn[i](x);
//     console.log(res);
//   } else {
//     res = fn[i](res);
//     console.log(res);
//   }
// }
// console.log(res, 'final');
//   const res = fn.reduceRight((acc, func) => func(acc), x);
//   console.log(res, 'final');
// }

// composition([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4);
// composition([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], 1);
// composition([], 42);

//! task 10

// function filteredArray(arr, fn) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//     }
//     if (fn(arr[i], i)) {
//       res.push(arr[i]);
//     }
//   }
//   console.log(res);
// }

// filteredArray([0, 10, 20, 30], function greaterThan10(n) {
//   return n > 10;
// });
// filteredArray([1, 2, 3], function firstIndex(n, i) {
//   return i === 0;
// });

// filteredArray([-2, -1, 0, 1, 2], function plusOne(n) {
//   return n + 1;
// });

//! task 11

// function circle(r) {
//   return (2 * Math.PI * r).toFixed(6);
// }

// console.log(circle(5));
// console.log(circle(10));
// console.log(circle(3));
// console.log(circle(16));

//! task 12

// function removeExclamationMarks(word) {
//   return word.replace(/[?_]+$/, '');
// }

// console.log(removeExclamationMarks('Hi!????__'));
// console.log(removeExclamationMarks('Hi!!!!!'));
// console.log(removeExclamationMarks('!Hi!!!!!'));

//! task 13

// const data1 = [3, 5, 2, 12, 7];
// const data2 = [9, 16, 6, 8, 3];

// const shalloCopy = data1.slice(1, -1);

// const concat = [...data1, ...data2];

// concat.forEach((el, i) => {
//   if (el > 3) {
//     console.log(`Dog ${1} is an adult `);
//     return;
//   }
//   console.log(`Dog ${i + 1} is a puppy `);
// });

//! task 14

// const user = 'Steven Thomas Whilliams Beka'; // stw
// const userName = user.slice().split(' ');

// function result(word) {
//   const newArr = [];
//   word.forEach((el) => {
//     newArr.push(el[0].toLowerCase());
//   });
//   return newArr.join('');
// }

// console.log(result(userName));
// const userName2 = user
//   .toLowerCase()
//   .split(' ')
//   .map((el) => el[0])
//   .join('');
// console.log(userName2);

//! task 15

// const arr1 = [1, 5, 3, 9];
// const arr2 = [4, 2, 4, 3];

// function calculate(arr, sum) {
//   const res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + arr[i + 1] === sum) {
//       res.push(arr[i], arr[i + 1]);
//     }
//   }
//   if (res.length < 1) return 'no result';
//   return res;
// }

// console.log(calculate(arr1, 8));
// console.log(calculate(arr2, 8));

//! task 15

// function createCounter(int) {
//   let num = int;

//   return {
//     increment: function () {
//       num++;
//       console.log(num);
//     },
//     decrement: function () {
//       num--;
//       console.log(num);
//     },
//     reset: function () {
//       num = int;
//       console.log(num);
//     },
//   };
// }

// const counter = createCounter(5);
// counter.increment();
// counter.reset();
// counter.decrement();

//! task 16

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverage = (arr1) => {
  const humanAge = arr1.map((dog) => (dog <= 2 ? 2 * dog : 16 + dog * 4));

  const adult = humanAge.filter((dog) => dog >= 18);

  return adult.reduce((acc, cur) => acc + cur, 0) / adult.length;
};

const avg1 = calcAverage(data1);
const avg2 = calcAverage(data2);
console.log(avg1, avg2);
