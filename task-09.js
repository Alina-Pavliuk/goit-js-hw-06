import {default as users} from './users.js'

const getNamesSortedByFriendsCount = users => {
  const namesSortedByFriends = users.sort((a, b) => a.friends.length - b.friends.length);
  return namesSortedByFriends.map(el => el.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]