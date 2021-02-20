const jwt=require('jsonwebtoken');
const jwtconfig=require('./jwt-config');

exports.validate=(req,res,next)=>{
    const studentToken=req.headers.authorization;;
    if(studentToken){
      jwt.verify(studentToken,jwtconfig.secret,(err,data)=>{
          if(data){
            req.student=data;
            next();
          }else{
            return res.status(500).json({
                status:0,
                data:err,
                message:"Token is not valid"
            })
        }
      })
    }else{
        //we have no toke passed inside the header
        res.status(500).json({
            status:0,
            message:"Please provide authentication token"
        })
    }
}