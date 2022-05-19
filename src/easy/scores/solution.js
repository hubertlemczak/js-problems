// const ratingsAdjuster = (ratings, minThreshold, maxThreshold) => {
//   const adjustedRatings = [...ratings];
//   console.log(adjustedRatings);
//   for (let i = 0; i < adjustedRatings.length; i++) {
//     if (ratings[i] < minThreshold) {
//       adjustedRatings[i] = minThreshold;
//     } else if (ratings[i] > maxThreshold) {
//       adjustedRatings[i] = maxThreshold;
//     }
//   }
//   return adjustedRatings;
// };

// const ratings = [1, 3, 5, 7, 9];
// const min = 3;
// const max = 7;

// console.log(ratingsAdjuster(ratings, min, max));

const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const scoresResult = (min, max, scores) => {
  const newArr = [];
  scores.map((score) => {
    if (score < min) score = min;
    if (score > max) score = max;
    newArr.push(score);
  });
  return newArr;
};
console.log(scoresResult(3, 8, scores));
