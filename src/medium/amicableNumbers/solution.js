const aAndB = [];
for (let a = 220; a < 90000; a++) {
  let aSum = 0;
  for (let i = 1; i <= a / 2; i++) {
    if (a % i === 0) {
      aSum += i;
    }
  }
  let b = aSum;
  let bSum = 0;
  for (let j = 1; j <= b / 2; j++) {
    if (b % j === 0 && b < a && b !== bSum) {
      bSum += j;
    }
  }
  if (bSum === a) {
    aAndB.push([aSum, bSum]);
  }
}
console.log(aAndB);

// runtime ~ 11 seconds
