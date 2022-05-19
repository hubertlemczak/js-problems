const threeOrFive = (upper) => {
  let sum = 0;
  for (let i = 0; i < upper; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i;
    }
  }
  return sum;
};
console.log(threeOrFive(1000));
