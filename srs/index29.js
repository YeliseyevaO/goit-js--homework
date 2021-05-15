function getShippingCost(country) {
  let message;
  // Change code below this line
const CHINA =100;
 const CHILE=250;
  const AUSTRALIA =170;
  const JAMAICA=120;
  
  switch(country){
    case 'China':
    message= `Shipping to China will cost ${CHINA} credits`	;
      break;
    case 'Chile':
      message =`Shipping to Chile will cost ${CHILE} credits`
       break;
    case 'Australia':
      message=`Shipping to Australia will cost ${AUSTRALIA} credits`;
      break;
    case 'Jamaica':
      message=`Shipping to Jamaica will cost ${JAMAICA} credits`;
     break;
      
   default:
      message='Sorry, there is no delivery to your country';
  }
  // Change code above this line
  return message;
}
/*=======30=====*/
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
/*====31====*/
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];
/*====32====*/
function getSubstring(string, length) {
  const substring =string.slice(0, length);

  return substring;
}
/*====33===*/
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
    if (message.length <= maxLength) {
        result = message;
    } else {
        result = message.slice(0, maxLength) + "...";
    }
 
  return result;
}
/*=======35======*/
function checkForName(fullName, name) {
 const result =fullName.includes(name) ; // Change this line
  return result;
}
/*====34====*/
function normalizeInput(input) {
  const normalizedInput =input.toLowerCase() ; // Change this line

  return normalizedInput;
}
/*=====36=====*/
function checkForSpam(message) {
  let result;
  // Change code below this line
result=message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')
  // Change code above this line
  return result;
}