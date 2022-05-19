const repeat = (string) => {
  let repeatedString = '';
  for (i = 0; i < string.length; i++) repeatedString += string[i] + string[i];
  return repeatedString;
};
console.log(repeat('hello!'));
