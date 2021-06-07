
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// /*=====8=====*/

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// /*==========9========*/
// function getExtremeElements(array) {

//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];
//     const newArray = [firstElement, lastElement];
//     return newArray;
//     /*array = [array[0] ,array[array.length-1]];
//     return array;*/
// }
// /*=========10========*/
// function splitMessage(message, delimeter) {
//  let words;
 
// words = message.split(delimeter);
 
//   return words;
// }
// /*===========11========*/
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line

// const arrayString = message.split(" ");
//   const priseString = arrayString.length * pricePerWord;
// return  priseString;
// }

// /*=========12========*/
// function makeStringFromArray(array, delimeter) {
//   let string;
 
// string = array.join(delimeter);
//   return string;
// }
// /*========13=======*/
// function slugify(title) {
 
// const arrayTitle = title.toLowerCase().split(" ");
// const slug =  arrayTitle.join("-");
//   return slug;

// }
// /*==========14=======*/
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice(0,2);  
// const nonExtremeEls =  fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// /*=========15=====*/
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

//     /*===========16=====*/
// function makeArray(firstArray, secondArray, maxLength) {
   
// let newArray = firstArray.concat(secondArray);
//   if(newArray.length<= maxLength){
//     return newArray;}
//   return newArray =  newArray.slice(0, maxLength);

// }
  /*========18========*/
function calculateTotal(numbers) {
 // Change code below this line
let sum = 0;
  for(let i=1; i<=numbers; i +=1){
    sum +=i}
return sum;
}
console.log(calculateTotal(18));
