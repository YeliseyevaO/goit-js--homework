const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i +=1) {
  const fruit = fruits[i];
  console.log(fruit);
}
/*==========20=======*/
function calculateTotalPrice(order) {
  let total = 0;
 
for(i=0; i < order.length; i+=1){
  total += order[i];
}
  return total;
}
/*=========21=====*/
function findLongestWord(string) {
 const arrayString = string.split(" "); 
	let longestWord = arrayString[0];
	for (let i = 0; i < arrayString.length; i+=1) {
		if (longestWord.length < arrayString[i].length) 
			longestWord = arrayString[i];
		
	}
	return longestWord;
}
/*===========22=======*/

function createArrayOfNumbers(min, max) {
  const numbers = [];

  for(let i = min; i<=max; i+=1){
  numbers.push(i);
  }
  return numbers;
}
/*========23======*/
function filterArray(numbers, value) {
   // Change code below this line
const newArray = []
         
    for (const number of numbers) {
        if (number > value) {
            newArray.push(number);
        }
    }
return  newArray;
}
/*========24====*/
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

function getCommonElements(array1, array2) {
  // Change code below this line
const commonArray = [];
  for(const element of array1){
      if (array2.includes(element)) {
     commonArray.push(element);
        }
}
	return commonArray;

}
/*=======26======*/
function calculateTotalPrice(order) {
  let total = 0;

  for (const element of order) {
    total += element;
  }
  return total;
}
/*===========27=======*/
function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}
/*=========29=======*/
function getEvenNumbers(start, end) {
   // Change code below this line
const evenArray = [];
  for(let i=start; i <= end; i+=1){
    if(i % 2 === 0){
       evenArray.push(i)}
  }
return evenArray;
}
/*=========30=====*/  
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
      break;
  }
}
/*========31=====*/
unction findNumber(start, end, divisor) {

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
    return i;
     
    }
  }
}
/*======32====*/
function includes(array, value) {

for (i = 0; i <= array.length; i += 1){
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}