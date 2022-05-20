const digits = (num) => Math.ceil(Math.log10(num + 1));
// const digits = (num) => Math.floor(Math.log10(Math.abs(num))) + 1;
console.log(digits(99));

const digitsString = (num) => num.toString().length;
console.log(digitsString(30230));
