function validQuestion(q) {
  return q && q.question && Array.isArray(q.options) && q.options.length > 1;
}

console.assert(validQuestion({question:'2+2?', options:['3','4']}));
console.assert(!validQuestion({question:'', options:['A','B']}));
console.assert(!validQuestion({question:'Q', options:[]}));
console.log('Question rules passed');
