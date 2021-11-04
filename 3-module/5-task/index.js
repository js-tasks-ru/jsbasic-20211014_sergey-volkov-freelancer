function getMinMax(str) {
  const numbers = str
    .split(' ')
    .map(item => Number(item))
    .filter(item => !Number.isNaN(item));

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
  };
}
