'tasx 1';
function createCounter(n) {
  return function (array) {
    for (let i = 0; i < array.length; i++) {
      console.log(n++);
    }
  };
}

const counter = createCounter(10);

counter(['a', 'b', 'c', 'd']);
