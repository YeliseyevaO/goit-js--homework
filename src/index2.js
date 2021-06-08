
/*============19========*/
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {

 const productValue = [];
 for (const product of products){
      

if (product.hasOwnProperty(propName)) {
      productValue.push(product[propName]);
    }
  }
  return productValue ;
}
/*=========20=====*/
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
 ки
let totalPrice = 0;
  for(const product of products){
    if(product.name === productName){
 totalPrice = product.price * product.quantity;
   }
  }  
    return  totalPrice;
}
/*========== 24========*/
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
for (const {hex, rgb}  of colors) {
  
  hexColors.push(hex);
  rgbColors.push(rgb);
}
/*==========26========*/
function calculateMeanTemperature(forecast) {
 const { today: {low:todayLow, high: todayHigh},
        tomorrow: {low:tomorrowLow, high:tomorrowHigh}}=
        forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
/*=========30======== распыление*/
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
 
 return  newData =  { completed, category,  priority, ...data}; 
}

/*========33=======*/
function findMatches(firstNumber, ...args) {
  const matches = [];
for(const arg of args){
  if (firstNumber.includes(arg)){
    matches.push(arg)
  }
}
  return matches;
}
/*=========35========*/
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
	  const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    return this.books;
  },
}