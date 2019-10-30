console.log('hello');
// Function expression
let myFunc = function () {
  console.log('This is a statement');
};
myFunc();

// Function declaration
function myNewFunc(name, weather = 'raining') {
  console.log('Hello ' + name + '.');
  console.log('It is ' + weather + ' today.');
}
myNewFunc('Lavakesh');
// Rest parameter is used to handle extra arguments passed to a function
let myFunc1 = function (name, weather, ...extraArgs) {
  console.log('hello ' + name + '.');
  console.log('It is ' + weather + ' today');
  for (let i = 0; i < extraArgs.length; i++) {
    console.log('Extra Args: ' + extraArgs[i]);
  }
};
myFunc1('Lavakesh', 'raining', 'one', 'two', 'three');
let myFunc2 = function (name) {
  return 'Hello ' + name;
};
console.log(myFunc2('Lavakesh'));
let myFunc3 = function(nameFunction){
  return ('Hello ' + nameFunction() + '.');
};
console.log(myFunc3(function() {
  return 'Lavakesh3';
}));
