const pascalsTriangle = [[1]];
for (let i = 1; i < 10; i++) {
  pascalsTriangle.push([]);
  for (let j = 0; j <= i; j++) {
    let pascalsTriangleEquation = pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j];
    if (j === 0 || j === i) pascalsTriangleEquation = 1;
    pascalsTriangle[i].push(pascalsTriangleEquation);
  }
}
console.log(pascalsTriangle);
