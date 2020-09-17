import  {default as users} from './users.js'


const getInactiveUsers = users => users.filter(el => !el.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]