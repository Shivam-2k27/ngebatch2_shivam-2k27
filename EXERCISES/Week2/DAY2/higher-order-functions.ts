/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/
export type Developer = {
  firstName: string, 
  lastName: string, 
  country: string, 
  continent: string, 
  age: number, 
  language: string
}


// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
export function countFromEurope (developers: Developer[]) {
  
let count=(developers.filter(ctry=>ctry.continent=='Europe')).length
if(count==0 || developers==null)
return 0
else
return count
}
// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
export function getGreetings (developers: Developer[]) {
return (developers.map((items)=>`Hi ${items.firstName}, what do you like the most about ${items.language}?`))
}

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing (developers: Developer[]) {
if(developers.filter((items)=>items.language==='Javascript').length>0)
return true
else 
return false
}

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'
export function getFirstPythonDeveloper (developers: Developer[]) {
 if(developers!=null && developers.length>0)
 {
  const pythonDEv=developers.find((a)=>a.language=='Python') 
  if(pythonDEv!==undefined)
  return `${pythonDEv.firstName}, ${pythonDEv.country}`
 } 
return 'none'
}

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
export function getAverageAge(developers: Developer[]) {
if(developers.length==0)
return -1
else 
return Math.floor((developers.reduce((age,value)=>age+value.age ,0))/developers.length)
}

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
export function getLanguageCounts (developers: Developer[]) {
const countLanguages:{[key:string]:number} ={};//declaring an empty object to store the values
  developers.map((items)=>{
  const lang =items.language
  if(countLanguages[lang])//we check if the language is already a property of Language object if it is we increase the count
  countLanguages[lang]++;
else
countLanguages[lang]=1;//else we initialize it
})
return countLanguages
}

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest (developers: Developer[]) {
  let newArray:string[]=[]//initializing an empty array
  if(developers.length>0)
  {
 developers.sort((a,b)=>b.age-a.age)// we have a sorted array

const oldstDev=developers[0].age
developers.map((items)=>{
if(items.age==oldstDev)
newArray=[...newArray,`${items.firstName}`]//appending the firstName as string to the newArray using spread operator
})
return newArray;
  }
  else
  return newArray;
}

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup (developers: Developer[]) {
/* const zonerArray:string[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] */
}
