const express=require('express')
const router =express.Router();

// /admin/add-product
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</buttton></form>')
})


// /admin/add-product => POST REQUEST
router.post('/add-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})




module.exports=router;