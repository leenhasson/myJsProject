const num = 123;

const divBy2 = num % 2 === 0;
const divBy3 = num % 3 === 0;
const divBy5 = num % 5 === 0;
const result = Number(divBy2) + Number(divBy3) + Number(divBy5);

console.log(result);
