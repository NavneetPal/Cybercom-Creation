const express=require('express');
const bodyParser=require('body-parser');
const {Sequelize,DataTypes,Model}=require('sequelize');
const JWT=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const app=express();
const JwtConfig=require('./config/jwt-config');


app.use(bodyParser.json());

//Database Connection
const sequelize=new Sequelize('demo','root','nakulpal619',{
    host:'localhost',
    dialect:'mysql'
})
sequelize.authenticate()
.then(()=>{
    console.log("Database Connected properly");
})
.catch(err=>{
    console.log('Database not connected')
})

//Model
//1.User Model
const User=sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    status:{
        type:DataTypes.INTEGER,
        defaultValue:1
    }
},{
    modelName:'User',
    timestamps:false
})

//Sync all the models
sequelize.sync({alter:true});


//register user api
app.post('/user',(req,res)=>{
    const{name,email,status}=req.body;
    const password=bcrypt.hashSync(req.body.password,10)
    
    //To check wheteher user alreday exist or not -if user alredy exist then show some message('user already exist) and 
    //if user does't exist then create one
    User.findOne({
        where:{
            email:email
        }
    })
    .then(user=>{
        if(user){
            res.status(200).json({
                status:0,
                message:"User already exist"
            })
        }else{
            User.create({
                name:name,
                email:email,
                password:password,
                status:status
            })
            .then(()=>{
                res.status(200).json({
                    status:1,
                    message:'User has been registerd successfully'
                })
            })
            .catch(err=>{
                res.status(500).json({
                    staus:0,
                    data:err
                })
            })
        }
    })
    .catch(err=>{
        console.log(err);
    })
    
})
 
//Login user api
app.post('/login',(req,res)=>{ 

    const {email,password}=req.body;
    User.findOne({
        where:{
            email:email
        }
    })
    .then(user=>{
        if(user){
            //we have user data
            if(bcrypt.compareSync(password,user.password)){
                
                let userToken=JWT.sign({
                    email:user.email,
                    id:user.id
                },JwtConfig.secret,{
                    expiresIn:JwtConfig.expiresIn, //this will be in ms,here 10 minute
                    notBefore:JwtConfig.notBefore, //after 1 minute we are able to use that
                    audience:JwtConfig.audience,
                    issuer:JwtConfig.issuer,
                    algorithm:JwtConfig.algorithm
                });

                //password matched
                res.status(200).json({
                    status:1,
                    message:"User logged in sucessfully",
                    token:userToken
                })
            }else{
                //password didn't matched
                res.status(500).json({
                    status:0,
                    message:"Password didn't match"
                })
            }
        }else{
            //we don't have user data
            res.status(500).json({
                status:0,
                message:"No such user Exist"
            })
        }
    })
    .catch(err=>{
        console.log(err);
    })
})


//Homepage routes
app.get("/",(req,res)=>{
    res.status(200).json({
        status:1,
        message:'Welcome to HomePage'
    })
})


//Server Connection
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})