// Functional Programming - Workshop Exercise 1.
//
// Read the whole file!
// Then start at the instructions after the "EXERCISES" header
//
// Run the file with "npx ts-node exercise-1.ts" and read the outputs (console.logs) before you make any changes

import { error, log } from "console"

type User = {
  name: string,
  food: number
}

type Food = {
  name: string,
  id: number
}

const userData: User[] = [
  {
    name: 'John',
    food: 1
  },
  {
    name: 'Bob',
    food: 2
  },
  {
    name: 'Sarah',
    food: 3
  },
  {
    name: 'Faye',
    food: 4
  }
]

const foodData: Food[] = [
  {
    name: 'Pizza',
    id: 1
  },
  {
    name: 'Indian',
    id: 2
  },
  {
    name: 'Thai',
    id: 3
  },
  {
    name: 'American',
    id: 4
  }
]

// Part 1: Refactor queryUser to use promises - see below first
// When you make a new promise you will need to implicitly or explicitly return it
const queryUser = (personName: string): Promise<User> /* callback: (user: User) => void) */ => 
  new Promise((resolve, reject) => {
    const result = userData.filter((user) => user.name === personName)[0] || null
    if (result)
      resolve(result)
    else
      reject(new Error("User not found"))
    /* console.log(result); */
  })


// Part 2: Refactor queryFood to use promises - see below first
// When you make a new promise you will need to implicitly or explicitly return it
const queryFood = (foodId: number):Promise<Food> /* callback: (food: Food) => void) */ => 
  
 new Promise((resolve, reject) => {
    const result = foodData.filter((food) => food.id === foodId)[0] || null
    if (result)
      resolve(result)
    else
      reject(new Error("Food not found"))
    /* console.log(result) */
  })


// Part 3: Inside findFavouriteFood use the two functions queryUser and queryFood in a chain
// Part 4: Refactor findFavouriteFood to use promises (use your chain!) - see below first
// When you make a new promise you will need to implicitly or explicitly return it
/* const findFavouriteFood = (name: string, callback: (message: string) => void) => {
  queryUser(name, (person) => {
    queryFood(person.food, (foodItem) => {
      callback(`${name} likes ${foodItem.name}`)
    })
  })
} */
/* const findFavouriteFood = (name: string)=>{
  new Promise((resolve) =>   resolve( queryUser(name)
      .then((person:any) => queryFood(person.food))
      .then((foodItem:any) => resolve(`${name} likes ${foodItem.name}`)))
  )} */
const findFavouriteFood = (name: string) =>
  new Promise((resolve) => {
    resolve(
      queryUser(name)
        .then((person) => queryFood(person.food))
        .then((foodItem) => `${name} likes ${foodItem.name}`)
    );
  });

// Debugging: Use these before you start to help you understand what the code is doing
/* console.log('Results:')
findFavouriteFood('John', console.log)
findFavouriteFood('Bob', console.log)
findFavouriteFood('Sarah', console.log)
findFavouriteFood('Faye', console.log) */

// ----- EXERCISES -------------------------------------------------------

// Part 1: Refactor queryUser to use promises
// Test your refactored function by uncommenting the line below
// queryUser('John').then(console.log) //{ name: 'John', food: 1 }

// Part 2: Refactor queryFood to use promises
// Test your refactored function by uncommenting the line below
// queryFood(1).then(console.log) // { name: 'Pizza', id: 1 }

// Part 3: Inside findFavouriteFood use the two functions queryUser and queryFood in a chain
// Test your refactored functions by uncommenting the lines below
// queryFood(1).then(console.log) // { name: 'Pizza', id: 1 }
//   queryFood(1)
//   .then((foodItem) => console.log(foodItem)) //{ name: 'Pizza', id: 1 }
// queryUser('John')
// .then((person) => queryFood(person.food))
// .then((foodItem) => console.log(`xxx likes ${foodItem.name}`)) // xxx likes Pizza

// Part 4: Refactor findFavouriteFood to use promises (use your chain!)

/*  After you have refactored all the functions, uncomment the lines below to test them */
findFavouriteFood('John').then(console.log).catch(console.error);
findFavouriteFood('Bob').then(console.log).catch(console.error)
findFavouriteFood('Sarah').then(console.log).catch(console.error)
findFavouriteFood('Faye').then(console.log).catch(console.error)

export { }
