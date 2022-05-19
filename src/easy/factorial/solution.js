const factorial = (upper) => {
  let sum = 1;
  for (i = 1; i <= upper; i++) {
    sum *= i;
  }
  return sum;
};
console.log(factorial(4));
