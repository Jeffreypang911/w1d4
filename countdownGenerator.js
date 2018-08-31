// function makeLoadedDie() {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   var number = 0

//   return function() {

//     var cheatdie = list[number]
//     number ++
//     return cheatdie

//   }
// }

// var rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6





var countdownGenerator = function (x) {

var number = x

return function() {

  if(number > 0){
  number--
  return "T-minus " + (number + 1) + "...";}


  if (number === 0) {
  number--
  return ("Blast Off!")
  }

  if (number < 0) {
  number--
  return ("Rockets already gone, bub!")

    }
  }
};

var countdown = countdownGenerator(3);

console.log(countdown)


console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!