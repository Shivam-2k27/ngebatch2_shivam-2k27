const myFunction =(a:number , b:number)=> a+b
console.log(myFunction(10,15)); //use of arrow function


//object creation
const object1 ={
    name:'shivam',
    age:'24',
    address:{
        city:'Bengaluru',
        state:'Karnataka'
    },
    phNo:'9110287932'
}



let employee = {
    empno : 1111,
    empname : "Accenture",
    age:44,
    salary : 34567.77,
    DisplayEmployee : function ()
    {
        console.log("Hellooooo");
    },
    hobbies : ["Singing","Jogging","Swimming"],
    reportee : {empno : 2222, empname : "Bangalore" , State: "Telangana"}
}
 
/* let empno = employee.empno;
let empname = employee.empname;
let age = employee.age;
let salary = employee.salary;
let DisplayEmployee = employee.DisplayEmployee;
let hobbies = employee.hobbies;
let reportee = employee.reportee; */
 
let {empno,empname,age,salary,DisplayEmployee,hobbies,reportee} = employee;  // Object Destructuring.
 
console.log("Employee Name = ",empname);
DisplayEmployee();
console.log("Second Hobby of Emp2 = ",hobbies[1]);
console.log("Emp2's reportee's name = ",reportee.empname);
