module.exports={
    secret:"onlinewebtutorkey",
    expiresIn:120, //2 min--->this means it will be valid only for 2 minute
    notBefore:2,  //for 2 seconds, By default notBefore/expiresIn is in seconds-->this line means token will be valid after 2 seconds
    audience:"site-users",
    issuer:"online web tutor",
    algorithm:"HS256"
}