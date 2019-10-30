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
// Arrow functions
let myFunc3 = (nameFunction) => ('Hello ' + nameFunction() + '.');
console.log(myFunc3(() => 'Lavakesh3'));

let messageFunction = function (name, weather) {
  var message = 'hello, Adam';
  if (weather == 'sunny') {
    var message = 'It is a nice day';
  }
  else {
    var message = 'It is ' + weather + ' today';
    console.log(message);
  }
  console.log(message);
};
messageFunction('Lavakesh', 'Raining');

// closure example
let closFunc = function (name) {
  let myLocalVar = "sunny";
  let innerFunction = function () {
    return ('Hello ' + name + '. Today is ' + myLocalVar + '.');
  }
  return innerFunction();
};
console.log(closFunc('Lavakesh'));

// boolean types
let firstBool = false;
let secondBool = true;
console.log(firstBool);
console.log(secondBool);