const timesTable = [];
const timesTables = () => {
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
      timesTable.push(i * j);
    }
  }
  return timesTable;
};
console.log(timesTables());
