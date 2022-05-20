const coins = [{ coin: 100 }, { coin: 25 }, { coin: 5 }, { coin: 1 }];

const coinsCounter = (num) => {
  let remainder = num;
  for (let i = 0; i < coins.length; i++) {
    coins[i] = { ...coins[i], amount: Math.floor(remainder / coins[i].coin) };
    const coinValue = coins[i].coin * coins[i].amount;
    if (coinValue > 0) remainder = num % coinValue;
  }
  return coins;
};
console.log(coinsCounter(4434));
