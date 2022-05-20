const timesTable = [];
const timesTables = () => {
  for (let i = 1; i <= 12; i++) {
    timesTable.push([]);
    for (let j = 1; j <= 12; j++) {
      timesTable[i - 1].push(i * j);
    }
  }
  return timesTable;
};
console.log(timesTables());
