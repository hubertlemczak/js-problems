const digits = (num) => Math.ceil(Math.log10(num + 1));
console.log(digits(30023));

const digitsString = (num) => num.toString().length;
console.log(digitsString(30230));
