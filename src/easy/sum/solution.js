const sum = (nums) => {
  let total = 0;
  for (i = 0; i < nums.length; i++) total += nums[i];
  return total;
};
console.log(sum([1, 2, 3, 4, 5, 5]));
