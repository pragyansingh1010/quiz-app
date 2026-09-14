function validOptions(options) {
  return Array.isArray(options) && options.length >= 2;
}

console.assert(validOptions(['A', 'B']));
console.assert(validOptions(['A', 'B', 'C', 'D']));
console.assert(!validOptions([]));
console.log('Quiz option count passed');
