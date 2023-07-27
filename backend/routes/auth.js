const express =require('express');
const User =require('../models/User');
const { body, validationResult } = require('express-validator');

const router =express.Router();


// create a user using :post "/api/auth". doesn't require Auth
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
    // create new user
    user=await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

      });
      res.json({user});
    }
    catch(error)
    {
      console.log(error.message);
      res.status(600).send("some error occured");
    }
   
    //   .then(user => res.json(user)).catch(err=>{console.log(err)
    // res.json({error:"Please enter a unique value for email",message:err})});
   
   
   
    // console.log(req.body);

    // const user=User(req.body);
    // user.save();
    // res.send(req.body);
})
module.exports= router;