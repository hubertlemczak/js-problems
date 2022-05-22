# Pseudo Code Solution

```
let pascalsTriangle = []
FOR i UNTIL number of rows
  FOR j UNTIL i
  let pascalsTriangleEquation = pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j]
  IF (pascalsTriangle[i - 1][j - 1] === undefined)
    push 1
  ELSE push pascalsTriangleEquation
```
