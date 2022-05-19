const makeSentence = (sentence) => {
  const firstUpper = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  const checkPunctuation = sentence[sentence.length - 1].match(/[.?!"]/);
  return checkPunctuation === null ? `${firstUpper}.` : `${firstUpper}`;
};
console.log(makeSentence('hello my .name is"'));
