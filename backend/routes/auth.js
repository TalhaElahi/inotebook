const express =require('express');
const User =require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const router =express.Router();
const jwt = require('jsonwebtoken');
const fetchuser =require('../middleware/fetchuser');

const JWT_SECRET='talhaisgoodb$oy';
// create a user using :post "/api/auth". doesn't require Auth


// ROUTE 1: CREATE A USER
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','password must be atleast 5 characters').isLength({ min: 5 }),

],async(req,res)=>{
    // If there are errors, return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check wether the user with this email exist
    try{
    let user= await User.findOne({email:req.body.email});
    console.log(user);

    if(user)
    {
      return res.status(400).json({error:"Sorry a user with this email already exist"});
    }
    // create salt for password
    const salt =await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    // create  new user
    user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        // extracomment:req.body.extracomment

      });
const data={
  user:{
    id : user.id
  }
}
const authtoken = jwt.sign(data,JWT_SECRET);
// console.log(authtoken);

      res.json({authtoken});
    }
    catch(error)
    {
      console.log(error.message);
    res.status(500).send("interner server error");

    }
   
    //   .then(user => res.json(user)).catch(err=>{console.log(err)
    // res.json({error:"Please enter a unique value for email",message:err})});
   
   
   
    // console.log(req.body);

    // const user=User(req.body);
    // user.save();
    // res.send(req.body);
})
// END ROUTE 1:************************************************
// ROUTE 2: LOGIN A USER
router.post('/login',[
  body('email','Enter a valid email').isEmail(),
  body('password','password cannot be blank').exists(),


],async(req,res)=>{
   // If there are errors, return bad request and error
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   const {email,password}=req.body; //destructuring
   try{
    let user=await User.findOne({email});
    if(!user)
    {
      return res.status(400).json({error:"sorry user doesnot exist"});
    }
    const passwordCompare=await bcrypt.compare(password,user.password);
    if(!passwordCompare)
    {
      return res.status(400).json({error:"sorry user doesnot exist"});
      
    }
   
    const data={
      user:{
        id : user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
      res.json({authtoken});
    

   }catch(error)
   {
    console.log(error.message);
    res.status(500).send("interner server error");
   }
   
})
// END ROUTE 2:************************************************
// ROUTE 3: gET LOGGED AND USER DETAIL ...USING POST  "/api/auth/getuser". login required 
router.post('/getuser',fetchuser,async(req,res)=>{
 
try
{
   userId=req.user.id;
const user=await User.findById(userId);
res.send(user);
}
catch(error)
{
  console.log(error.message);
  res.status(500).send("interner server error");
}
});
module.exports= router;