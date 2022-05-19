const reverse = (string) => {
  let reversedString = '';
  for (i = string.length - 1; i >= 0; i--) reversedString += string[i];
  return reversedString;
};
console.log(reverse('"!!reversed2@3"'));
