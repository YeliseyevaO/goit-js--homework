/*const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;
/*========3========
function Car(brand,model,price){
  this.brand = brand;
  this.model = model;
  this.price = price;
}

function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
/*=====5======
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}
  Car.prototype.getPrice = function(){
    return this.price;
  };
  Car.prototype.changePrice = function(newPrice){
    return this.price = newPrice;
};
  /*====6=====
function Storage(items){
  this.items = items;
}
Storage.prototype.getItems = function(){
  return this.items;
};
Storage.prototype.addItem = function(newItem){
  return this.items.push(newItem);
};

Storage.prototype.removeItem = function(item){
  return this.items.splice(this.items.indexOf(item),1)
};



function  StringBuilder(baseValue){
  this.value = baseValue;
};
StringBuilder.prototype.getValue = function(){
  return this.value;
};
StringBuilder.prototype.padEnd = function(str){
  return this.value = this.value + str;
};
StringBuilder.prototype.padStart = function(str){
  return this.value = str + this.value;
};
StringBuilder.prototype.padBoth = function(str){
  return this.value = str + this.value + str;
};
/*=====11========
class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand(){
    return this.#brand;
  }
  changeBrand(newBrand){
    return this.#brand = newBrand;
  }
}
/*=====12=====
class Storage{
  #items;
  constructor(items) {
  this.#items = items;
}

getItems() {
  return this.#items;
}

addItem(newItem) {
  this.#items.push(newItem);
}

removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
}
}


// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
/*====14======
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}
/*=====15=====
class Car {
 
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if(newPrice <= Car.MAX_PRICE){
      
    this.#price = newPrice;
  }
  }
  // Пиши код выше этой строки
}
/*=====16======
class Car {
  static #MAX_PRICE = 50000;
    static checkPrice(price) {
        if (price > Car.#MAX_PRICE) {
            return 'Внимание! Цена превышает допустимую.';
        }
        return 'Всё хорошо, цена в порядке.';
    }
  constructor({ price }) {
    this.price = price;
  }
}*/

