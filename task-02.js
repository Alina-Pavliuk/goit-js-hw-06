import  {default as users} from './users.js'


const getUsersWithEyeColor = (users, color) => users.filter(element => element.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]