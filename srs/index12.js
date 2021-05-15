/*=========задание 12 =======*/
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
    const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    
  return message;
}

  /*=======13======*/
function isAdult(age) {
  // Change code below this line
  const passed =(age >= 18);
  return passed;
}

/*========14=======*/
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = SAVED_PASSWORD === password ;
  return isMatch;
}
  /*=====15====*/
function checkAge(age) {
  let message;

  if (age>=18) { 
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
  /*=======16=======*/
unction checkStorage(available, ordered) {
  let message;

if(available<ordered){
  message="Not enough goods in stock!";
}else{
  message="Order is processed, our manager will contact you.";}
   
  return message;
}
/*=======17=======*/
let a = 5;
let b = 10;
let c = 15;
let d = 20;

a += 2;
b -= 4;
c *= 3;
d /= 10;
/*===========18=======*/
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

const totalPrice=(pricePerDroid * orderedQuantity);
    if (totalPrice > customerCredits) {
        message = "Insufficient funds!";
    } else {
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
    }
  return message;
}
/*========19=======*/
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { 
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD ) { 
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
/*=====20======*/
function checkStorage(available, ordered) {
  let message;
 
if( ordered === 0){
  message="There are no products in the order!";
} else if(ordered > available){
  message="Your order is too large, there are not enough items in stock!";
}else{
  message="The order is accepted, our manager will contact you";
}
 
  return message;
}