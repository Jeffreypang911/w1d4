// var words = ["ground", "control", "to", "major", "tom"];

// var lengthSort = words.map(function(word) {
//   return word.length;
// });

// var UpperCaseSort = words.map(function(word) {
//   return word.toUpperCase();
// });

// var LowerCaseSort = words.map(function(word) {
//   return word.split('').reverse().join('');
// });

// console.log(lengthSort)
// console.log(UpperCaseSort)
// console.log(LowerCaseSort)




var words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, function(word) { return word.length; }))



function map(arr, callback) {
  outputarray = []
  for (i = 0; i < arr.length; i++) {
    outputarray.push(callback(arr[i]))
  }
  return outputarray
}

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });