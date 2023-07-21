const express =require('express');
const User =require('../models/User');
const { body, validationResult } = require('express-validator');

const router =express.Router();


// create a user using :post "/api/auth". doesn't require Auth
router.post('/',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','password must be atleast 5 characters').isLength({ min: 5 }),

],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

      }).then(user => res.json(user)).catch(err=>{console.log(err)
    res.json({error:"Please enter a unique value for email",message:err})});
    // console.log(req.body);

    // const user=User(req.body);
    // user.save();
    // res.send(req.body);
})
module.exports= router;