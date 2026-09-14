function score(correct, total) {
  if (total <= 0) return 0;
  return Math.max(0, Math.min(100, correct / total * 100));
}

console.assert(score(0, 10) === 0);
console.assert(score(10, 10) === 100);
console.assert(score(5, 10) === 50);
console.assert(score(0, 0) === 0);
console.log('Quiz score bounds passed');
