

var words = ["ground", "control", "to", "major", "tom"];
map(words, function(word) { return word.length; })



function map(arr, callback) {
  outputarray = []
  for (i = 0; i < arr.length; i++) {
    outputarray.push(callback(arr[i]))
  }

  console.log(outputarray)
}

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});