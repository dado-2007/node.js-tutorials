//normal function statement
function sayHi() {
  console.log('hi')
}

sayHi()

//-------------------

function callF(f) {
  f()
}

//function expression
const sayBye = function() {
  console.log('bye')
}

sayBye()

callF(sayBye)