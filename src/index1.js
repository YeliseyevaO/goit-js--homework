const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
 apartment.area = 60;
 apartment.rooms = 3;
apartment.location = {};
 apartment.location.country = "Jamaica";
apartment.location.city = "Kingston";
console.log(apartment.price);
/*======== 10 =========*/

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];
// Change code below this line
for (const key in apartment){
  keys.push(key);
  values.push(apartment[key]);
}
/*========== 11  ==========*/

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
 
if(apartment.hasOwnProperty(key)){
  keys.push(key);
  values.push(apartment[key]);
}
}
/*========== 12 =========*/
function countProps(object) {
  let propCount = 0;
for (const key in object) {
 
  if (object.hasOwnProperty(key)) {
 propCount +=1
  }
}
  return propCount;
}
/*==========13========*/

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);
for (const key of keys){
 values.push(apartment[key]);
}
/*========== 14 =======*/
function countProps(object) {
 
  let propCount = 0;
const keys = Object.keys(object);
    for (const key of keys) {
      propCount += 1;  
  }
  return propCount;
}
/*======== 16 =======*/
function countTotalSalary(salaries) {
  let totalSalary = 0;
 
const values = Object.values(salaries);
  for (const value of values){
    totalSalary += value
  }
  return totalSalary;
}
/*===========17 ========*/
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors){
   hexColors.push(color["hex"]);
   rgbColors.push(color["rgb"]);
}

/*========== 18 ====*/
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
 
  for (const product of products){
    if(product.name === productName){
      return product.price;
    }
  }
  return null
}
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions){
      if(potion.name === newPotion.name){
      return `Potion ${potionName} is already equipped!`;
    }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i=0; i<this.potions.length; i+=1){
      if(this.potions[i].name === potionName){
        this.potions.splice([i],1);
        return "ok";
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for(const potion of this.potions){
      if(potion.name === oldName){
        potion.name = newName;
        return "ok";
      }
    }

   return `Potion ${oldName} is not in inventory!`;
  }
  // Change code above this line
};

