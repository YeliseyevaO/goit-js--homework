/*Запомните шесть значений, которые в булевом преобразовании приводятся к`false`:
`0`, `NaN`, `null`, `undefined`, пустая строка`""` или`''` и само значение`false`
.Абсолютно всё остальное приводится к`true`*/
/*=========21========*/
function isNumberInRange(start, end, number) {
  const isInRange =(number>start) && (number<end) ;

  return isInRange;
}
/*=====22=====*/
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip" ; 

  return canAccessContent;
}
/*========23======*/
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}
/*=========24=====*/
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
 
if(totalSpent>=50000){
  discount= GOLD_DISCOUNT;
}else if(totalSpent>=20000 && totalSpent<50000){
   discount=SILVER_DISCOUNT;
}else if(totalSpent>=5000 && totalSpent<20000){
  discount= BRONZE_DISCOUNT;
}else{
  discount= BASE_DISCOUNT;
}
  
  return discount;
}
/*========25=======*/
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
    message =
        ordered > available
            ? 'Not enough goods in stock!'
            : 'The order is accepted, our manager will contact you';
    return message;

}
/*========26=======*/
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
 
message = password === ADMIN_PASSWORD ?
  'Access is allowed':
 'Access denied, wrong password!';

  return message;
}

function getSubscriptionPrice(type) {
  let price;

 switch (type) { // Change this line
    case 'starter': // Change this lin
      price = 0; // Change this line
         break;
     
    case 'professional': 
      price = 20 ; 
      break;

    case 'organization': 
      price = 50; 
      break;
  }
  return price;
}
/*========28====*/
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  
 switch(password){
   case null:
    message = "Canceled by user!";
     break;
   case ADMIN_PASSWORD: 
    message = "Welcome!";
     break;
     
   default:
    message = "Access denied, wrong password!";
  }
  return message;
}