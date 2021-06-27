

/*function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newArray=[];
    numbers.forEach((number,index)=> {
      if (number % 2 === 0) {
        newArray.push(number + value);
      }
      else 
      {newArray.push(number)}
    });
  return newArray;
    // Пиши код выше этой строки
}
 /*=====10=====
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsLengths = planets.map((planet) => planet.length);

/*========13=======
const getUserNames = users => {
   return users.map(user=>user.name); 

};
  /*========17=======*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';

const topRatedBooks = books.filter(book=>book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
/*=====18=====*/
const getUsersWithEyeColor = (users, color) => {
 return users.filter(user =>user.eyeColor === color);

};
/*========19======*/
const getUsersWithAge = (users, minAge, maxAge) => {
 return users.filter(user => user.age >= minAge && user.age <= maxAge); 

};
/*==========20=======*/
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user =>user.friends.includes(friendName)); 
};
// Пиши код ниже этой строки
const getFriends = (users) => {

     const allFriends =users.flatMap(user =>user.friends);
  return allFriends.filter((friend,i, array)=> array.indexOf(friend) === i);
  
};
/*=====25=====*/

const getUserWithEmail = (users, email) => {
  return users.find(user=>user.email=== email); 
};
/*=====30======*/
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((previosEl, el)=> {
  return previosEl + el;
}, 0);
const averagePlayTime = totalPlayTime / playtimes.length;
/*========31========*/
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, player)=>{
  return total + player.playtime / player.gamesPlayed;
}, 0);
/*=====33=====*/
const getTotalFriendCount = users => {
  return users.flatMap(user=> user.friends). reduce((total,friend)=>{
    return total + 1;
  },  0);
};
/*======34=====*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
const ascendingReleaseDates =[...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();
/*====35=======*/
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const ascendingReleaseDates = [...releaseDates].sort((a,b)=> a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
/*========36=======*/
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  const authorsInAlphabetOrder =[...authors].sort((a,b)=> a.localeCompare(b));
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  /*========37======*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
const sortedByAuthorName =[...books].sort((firstBook, secondBook)=> firstBook. author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook)=> secondBook. author.localeCompare(firstBook.author));

const sortedByAscendingRating =[...books].sort((firstBook, secondBook)=> firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
/*=====38*======*/
const sortByAscendingBalance = users => {
  return [...users].sort((firstUser,secondUser)=> 
                         firstUser.balance - secondUser.balance);
};

/*========39======*/
const sortByDescendingFriendCount = users => {
    return [...users].sort((firstUser,secondUser)=>
      secondUser.friends.length - firstUser.friends.length);                     
};
/*=======41======*/
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
const names =[...books].sort((firstBook,secondBook)=>firstBook.author.
            localeCompare(secondBook.author))
.filter(book=>book.rating > MIN_BOOK_RATING)
.map(book=> book.author);