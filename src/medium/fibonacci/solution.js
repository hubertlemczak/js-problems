const fibonacci = [1, 1];
for (let i = 2; i <= 100; i++) fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
console.log(fibonacci);
