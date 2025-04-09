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

function composition(fn, x) {
  if (fn.length < 1) return console.log(x, 'empty');

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
  const res = fn.reduceRight((acc, func) => func(acc), x);
  console.log(res, 'final');
}

composition([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4);
composition([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x], 1);
composition([], 42);
