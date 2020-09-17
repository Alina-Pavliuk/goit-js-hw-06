import  {default as users} from './users.js'

const calculateTotalBalance = users => users.reduce((acc, value) => (acc + value.balance), 0);

console.log(calculateTotalBalance(users)); // 20916