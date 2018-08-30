// function callFunction(cb) {
//   cb();
// }

// function addNumbers(num1, num2) {

//   return num1 + num2;
// }


// var returnValueOfAddNumbers = addNumbers(1, 2);
// var theActualFunctionAddNumbers = addNumbers;

// // console.log("hi");
// // console.log(result);

// // console.log(addNumbers(3, 4));
// // console.log(addNumbers);

// callFunction(addNumbers);

function squared(num) {
  var x = num * num;
  return x;
}

var arr = [1, 2, 3, 4 ,5];
var newArray = arr.map(squared);
console.log(newArray);

var newArray2 = arr.map(function(num, index, array) {
  var x = num * num * num
  return x;
});

console.log(newArray2);

// function forEach(array, cb) {

// }


