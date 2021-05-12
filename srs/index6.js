
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = (pricePerDroid *  orderedQuantity + deliveryFee);
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`; 
console.log(message);
/*=============функция=========*/
function  sayHi(){
  console.log("Hello, this is my first function!")
}
sayHi();
/*=========задание 8========*/
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
/*=========задание9=========*/
function add(a, b, c) {
 return a + b + c;

}

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));