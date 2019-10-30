// Chapter 5 starts
let myData = new Object();
myData.name = 'Adam';
myData.weather = 'sunny';
console.log('Hello ' + myData.name + '.');
console.log('Today is ' + myData.weather + '.');

// object literal format
let myData1 = { name: 'Lavakesh', weather: 'sunny' };
console.log('Hello ' + myData1.name + '. ');
console.log('Today is '+ myData1.weather + '.');
// methods : functions defined on an object
let myData3 = {
  name: 'Lavakesh',
  weather: 'raining',
  printMessages: function(){
    console.log('Hello ' + this.name + '.');
    console.log('It is ' + this.weather + '.');
  }
};
myData3.printMessages();