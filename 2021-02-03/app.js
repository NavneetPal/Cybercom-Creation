const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log(`In the middleware`);
    next(); //allow the request to continue to the next middleware in line
}); 

app.use((req,res,next)=>{
    console.log(`In anothe middleware`);
    res.send('<h1>Hello from express<h1>')
})

const port=3000;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});