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

function Reducer(nums, fn, init) {
  let val = init;
  console.log(val, '1');
  if (nums.length < 1) return init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  console.log(val, '3');
  return val;
}

console.log(
  Reducer(
    [1, 2, 3, 4],
    function sum(accum, curr) {
      return accum + curr * curr;
    },
    100
  )
);
