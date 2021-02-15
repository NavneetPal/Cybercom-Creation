const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const {Sequelize,Model,DataTypes}=require('sequelize');
const appRoutes=require('./routes');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.use('/',appRoutes);

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is listening on port no ${PORT}`);
})