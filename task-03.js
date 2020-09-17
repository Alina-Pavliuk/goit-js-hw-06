import  {default as users} from './users.js'

const getUsersWithGender = (users, gender) => {
   const arrayGender = users.filter(el => el.gender === gender);
   return arrayGender.map(element => element.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]