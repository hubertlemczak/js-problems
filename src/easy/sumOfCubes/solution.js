const sumOfCubes = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i] ** 3;
  }
  return total;
};
console.log(sumOfCubes([1, 5, 9]));
