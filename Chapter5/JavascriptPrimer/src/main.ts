let firstVal = 5;
let secondVal = "5";

if (firstVal === secondVal) {
  console.log('they are same');
} else {
  console.log('they are not same');
}

// array
let myArray = new Array();
myArray[0] = 100;
myArray[1] = 'Lavakesh';
myArray[2] = true;
console.log(myArray);

let anArray = [100, 'Lavakesh', false];
console.log(anArray);

anArray.forEach((value, index) => console.log('Index ' + index + ': ' + value));

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];
let totalValue = products.filter(item => item.stock > 1)
                  .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log(totalValue);
