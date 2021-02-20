const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const productRoutes=require('./routes/product');
const studentRoutes=require('./routes/student');

app.use(bodyParser.json());

app.use('/',productRoutes);
app.use('/',studentRoutes);

//HomePage
app.get('/',(req,res)=>{
    res.status(200).json({
        status:1,
        message:"Welcome to home page"
    })
})



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on port no :${PORT}`);
})
