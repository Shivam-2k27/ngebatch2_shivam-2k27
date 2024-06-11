// Cursor Park (anyone not typing put your cursor here)


// Rewrite this function in Arrow form:

const sayHello =(firstName: string, lastName: string)=>console.log(`sayHello: Hello ${firstName} ${lastName}`)
  

sayHello('Neil','Jennings')

// TODO make hiEveryone() as arrow function with sayHello functionality

const hiEveryone=()=>sayHello('Neil','Jennings')

// Rewrite this function in one-line arrow syntax:

let  loadsOfMoney=(myWages:number)=>myWages*10
console.log(loadsOfMoney(300));

// TODO make soMuchMoreMoney() as a one-line arrow expression with loadsOfMoney

const resultSum=()=>loadsOfMoney(300)
console.log(`resultSum: ${resultSum()}`)
