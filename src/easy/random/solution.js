const arr = [];
const random = (min, max) => {
  for (i = min; i <= max; i++) arr.push(Math.round(Math.random() * (max - min) + min));
  return arr;
};
console.log(random(2, 5));
