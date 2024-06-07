//create a server
import express from 'express';
const app =express();//creating an instance of a server

app.listen(3001,()=>{
    console.log('Server is up and running');
})

//create an end point
app.get('/server',(req,res)=>{
    res.write('hello  from the express server')
    res.end();
})

   app.get('/courses',(req,res)=>{
    var courses =['angular','react','typescript','java'];
    res.send(courses);
   }) 

   app.get('/prod',(req,res)=>{
    var prod ={
        "id":123,
        "name":'Laptop',
        "price":1234
    }
    res.send(prod);
   }) 

   /* const PORT=3000;
   app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`);
       }) */

       //query string parameter
    app.get('/users/byid',(req,res)=>{
        res.send('Hello query users from query' + req.query.id)
    })

    app.get('/users/:id',(req,res)=>{
        res.send('Good evening user from param'+ req.params.id)
    })
     app.use(express.json())
    //post methods
    app.post('/login-user',(req,res)=>{
        const userObject = req.body.user;
      
        res.json({results:userObject})
       
        
        app.post('/product',(req,res)=>{
            const product = req.body.product;
            res.json({results:product})
        })
    })

    