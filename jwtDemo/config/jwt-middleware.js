const jwtConfig=require('./jwt-config');
const JWT=require('jsonwebtoken');

exports.checkToken=(req,res,next)=>{
    let userToken=req.headers.authorization;

    if(userToken){
        //tokenvalue

        JWT.verify(userToken,jwtConfig.secret,{
            algorithm:jwtConfig.algorithm,
        },(err,data)=>{
            if(err){
                return res.status(500).json({
                    status:0,
                    data:err,
                    message:"Token is not valid"
                })
            }else{
                req.user=data;
                next();
            }
        })
    }else{
        res.status(500).json({
            status:0,
            message:"Please provide authentication token value"
        })
    }
}

