const pigLatin = (sentence) => {
  const translatedSentence = [];
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (/([A-Z])/.test(words[i][0])) {
      translatedSentence.push(
        words[i].slice(1, 2).toUpperCase() +
          words[i].slice(2) +
          words[i].slice(0, 1).toLowerCase() +
          'ay'
      );
    } else {
      translatedSentence.push(words[i].slice(1) + words[i].slice(0, 1) + 'ay');
    }
  }
  return translatedSentence.join(' ');
};

console.log(pigLatin('The quick Brown fox'));
