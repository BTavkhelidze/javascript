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
//       console.log(num);
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
