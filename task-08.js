import  {default as users} from './users.js'

const getUsersWithFriend = (users, friendName) => {
  const arrayFriends = users.filter(element => element.friends.find(el => el === friendName));
  return arrayFriends.map(el => el.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

