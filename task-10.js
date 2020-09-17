import {default as users} from './users.js'

const getSortedUniqueSkills = users => {
  let allSkills = [];
  users.forEach(el => allSkills.push(...el.skills));
  return allSkills.sort().filter((el, i, arr) => arr.indexOf(el) === i).sort();
};
// or ->
// const getSortedUniqueSkills = users => {
//   return users.reduce((acc, user) => {
//     return acc.push(...user.skills)
//   },[])

//   const set = new Set(skills);
  
//   return [...set];
// };

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


// console.log(getSortedUniqueSkills(users));