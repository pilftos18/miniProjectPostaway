import jwt from 'jsonwebtoken';

const jwtAuth = (req,res, next)=>{
    //1. Read the Token
    // const token = req.headers['Authorization'];  //get from headers value 
    // console.log(token);
    const { jwtToken } = req.cookies;
    // console.log(jwtToken);
    //2 if no token return error
    if(!jwtToken){ 
        return res.status(401).json({msg: 'No token, authorization denied'});
    }
    // 3. verify token 
    try {
        const payload = jwt.verify(jwtToken,"taraIn!123j%6j##$G");
        console.log("checkpayload",payload);
        req.userID = payload.userID;
    } catch (error) {
        //return error
        return res.status(401).json({msg: 'Token is not valid'});
    }
   //5. call next middleware function
     next();
}

export default jwtAuth;
