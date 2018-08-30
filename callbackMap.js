var words = ["ground", "control", "to", "major", "tom"];

var lengthSort = words.map(function(word) {
  return word.length;
});

var UpperCaseSort = words.map(function(word) {
  return word.toUpperCase();
});

var LowerCaseSort = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(lengthSort)
console.log(UpperCaseSort)
console.log(LowerCaseSort)