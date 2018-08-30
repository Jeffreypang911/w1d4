// var input = [ { x: 3, y: 4 }, { x: 12, y: 5 }, { x: 8, y: 15 } ];


// var result = input.map(function(object)
// Math.sqrt((object.x * object.x) + (object.y * object.y))

// console.log(result.pop)
// )



// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);









var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

squRoot = function(object) {
result = Math.sqrt((object.x * object.x) + (object.y * object.y))
return result
}

var result = input.map(squRoot);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
