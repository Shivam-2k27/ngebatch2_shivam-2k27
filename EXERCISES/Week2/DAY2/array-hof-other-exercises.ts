// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
  { name: 'Aisha', age: 8 }, // ages in months!
  { name: 'Oscar', age: 9 },
  { name: 'Wiggins', age: 44 },
  { name: 'Gatsby', age: 56 }
]

type Academite = {
  name: string, 
  age: number
}



// Reduce the array to only the total age in months of all the doggie Academites
// TODO
const totalAge=someAcademitesWithAges.reduce((total ,acd)=>total+acd.age, 0)
console.log(totalAge);

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it
const sortByName = (array:Academite[])=>{ 
   return array.sort((a,b)=>{
    if(a.name>b.name)
    return 1
  else if(a.name<b.name)
  return -1
else
return 0
   })
//creating a compare function 
}
// TODO
const sortedArray = sortByName(someAcademitesWithAges)
console.log(sortedArray);

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortByAges = (array2:Academite[])=>{
  return array2.sort((a,b)=>{
    if(a.age>b.age)
    return 1
  else if(a.age<b.age)
  return -1
else
return 0
  })
}
const sortedAge = sortByAges(someAcademitesWithAges)
console.log(sortedAge);
// TODO

// EOF
