function checkSpam(str) {
  const spamWords = ['1xBet', 'XXX'];

  return spamWords.some(word => str.toLowerCase().includes(word.toLowerCase()));
}
