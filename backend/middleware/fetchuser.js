const jwt = require('jsonwebtoken');
const JWT_SECRET='talhaisgoodb$oy';

const fetchuser=(req,res,next)=>{
    // get uset from jwt token and add id to the request object
    const token = req.header('auth-token');
    if(!token)
    {
        res.status(401).send({error:"please authenticate the user token"});
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
    } catch (error) {
        res.status(401).send({error:"please authenticate the user token"});
        
    }
  
next();
}
module.exports=fetchuser;