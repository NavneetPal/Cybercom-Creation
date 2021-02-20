const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const studentModel=require("../models").Student;
const{Op}=require('sequelize');
const jwt=require('jsonwebtoken');
const jwtconfig=require('../config/jwt-config');
const {validate}=require('../config/jwt-middleware');

//add student api
router.post('/student',(req,res)=>{
    const{name,email,roll_no}=req.body;
    studentModel.findOne({
        where:{
            email:{
                [Op.eq]:email
            }
        }
    }).then(user=>{
        if(user){
            //user exists
            res.status(500).json({
                status:0,
                message:"Student already exists with this email address"
            })
        }else{
            //user doesn't exist create a user
            studentModel.create({
                name:name,
                email:email,
                roll_no:roll_no,
                password:bcrypt.hashSync(req.body.password,10)
            })
            .then(()=>{
                res.status(200).json({
                    status:1,
                    message:"User created suceesfully"
                })
            })
            .catch(err=>{
                res.status(500).json({
                    status:0,
                    message:"Unable to create a user",
                    data:err
                })
            })
        }
    })
    .catch(err=>{
        console.log(err);
    })
})

//profile api for student
router.post('/profile',validate,(req,res)=>{
  const {id}=req.student;
  studentModel.findByPk(id)
  .then(student=>{
      if(student){
        res.status(500).json({
            status:1,
            message:"Profile Data",
            data:student
        })
      }else{
          res.status(500).json({
              status:0,
              message:`Student with the id:${studentId} doesn't exist`
          })
      }
  })
  .catch(err=>{
      console.log(err);
  })
})

//login api
router.post('/login',(req,res)=>{
    const{email,password}=req.body;

    studentModel.findOne({
        where:{
            email:{
                [Op.eq]:email
            }
        }
    }).then(student=>{
        if(student){
            //student exist now check for the passord
            if(bcrypt.compareSync(password,student.password)){

                //generating student token
                const studentToken=jwt.sign({
                    email:student.email,
                    id:student.id
                },jwtconfig.secret,{
                    expiresIn:jwtconfig.expiresIn,
                    notBefore:jwtconfig.notBefore
                });
                res.status(500).json({
                    status:1,
                    message:"Logged in Successfull",
                    data:studentToken
                })
            }else{
                //Password doesn't math
                res.status(500).json({
                    status:0,
                    message:"Password doesn't matched",
                })
            }
        }else{
            //student doesn't exist
            res.status(500).json({
                status:0,
                message:"Student doesn't exist with this email"
            })
        }
    })
})

module.exports=router; 