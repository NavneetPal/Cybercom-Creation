const express=require('express');
const productModel=require("../models").Product;
const router=express.Router();
const {Op}=require('sequelize');

router.get('/products',(req,res)=>{
    productModel.findAll({ 
       /*  attributes:["id","name"],
        limit:10,//total count of products we want at request
        offset:4,//From 11 id onwards 10 item will be shown(we are setting our first index value)
        //order:[["id","DESC"]],//order by descwith rspect to the attribute id
        order:[["name","ASC"]] */
        where:{
           // id:100
           /* id:{
               [Op.eq]:7 //id=7
           } */
           /* id:{
               [Op.between]:[10,13]
           } */
          /*  [Op.and]:[
               {
                name:{
                    [Op.like]:"P%",//name like "p%"
                }
               },
               {
                name:{
                    [Op.like]:"%Bacon%" //name like "P%" and name like "%Bacon%"
                }
               }
           ] */
          /*  id:{
               [Op.gt]:95 //where id >95
           } */
           /* [Op.and]:[{
               id:{[Op.gte]:15}
           },{
               id:{[Op.lt]:20}
           }] */
         /*   id:{
               [Op.or]:{
                [Op.gte]:15,
                [Op.lt]:20
               }
           } */

           [Op.and]:{
               id:{
                    [Op.eq]:2
               },
               name:{
                    [Op.eq]:"Licensed Frozen Hat"
               }
           }
          
        }
    })
    .then(data=>{
        if(data){
            //we have some data
            res.status(200).json({
                status:1,
                message:"Product Found",
                data:data
            })
        }else{
            //we don't have any data
            res.status(200).json({
                status:0,
                message:"No product found"
            })
        }    
    })
    .catch()
});

module.exports=router;