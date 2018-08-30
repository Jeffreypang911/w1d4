var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sortFunction = function(a, b) {

  if (a.age < b.age) {
    return a.age
  }
  else if (a.name === b.name){
    return false

  }

  else if(b.name < a.name) {
      return true;
  }

  else { return false
  }
}

var sortedStudents = students.sort(sortFunction)

console.log(sortedStudents)