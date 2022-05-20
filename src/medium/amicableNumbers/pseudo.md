# Pseudo Code Solution

```
asum;
bsum;
FOR a UNTIL 100000 {
  FOR i UNTIL a {
    IF a % i === 0
  asum += i
  }
  FOR j UNTIL asum {
    IF asum % j === 0
    bsum += j
  }
  IF bsum === a {
    return asum and asum
  }
}
```
