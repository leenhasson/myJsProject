const numbers = [1, 0, 3, 0, -5, 0, 7, 2];

const zeroCount = numbers.reduce(
  (count, num) => count + (num === 0 ? 1 : 0),
  0,
);

console.log(zeroCount);
