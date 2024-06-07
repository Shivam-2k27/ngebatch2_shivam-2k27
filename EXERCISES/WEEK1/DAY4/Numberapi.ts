import express from 'express'
//creating an instance of express
const app =express();

//need to listen on a port
app.listen(4999,()=>{
console.log("port running on 4999");
})

//create a get requst
app.get('/add/:num1/:num2',(req,res)=>{
    const num1:number=parseInt(req.params.num1)
    const num2:number=parseInt(req.params.num2)

    res.send(`Adding ${num1} plus ${num2} equals ${num1+num2}`)
})
  