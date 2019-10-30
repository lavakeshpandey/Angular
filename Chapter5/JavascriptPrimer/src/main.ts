class MyClass {
  constructor(name, weather) {
    this.name = name;
    this.weather = weather;
  }
  printMessage() {
    console.log('Hello ' + this.name + '.');
    console.log('Today is ' + this.weather + '.');
  }
}
let myData = new MyClass('Lavakesh', 'sunny');
myData.printMessage();
