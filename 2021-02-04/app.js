const { response } = require('express');
const express=require('express');
const app=express();
const bodyParser=require('body-parser')
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')

//parse application/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))


app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})



//Server connection//
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`)
})