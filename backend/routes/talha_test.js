const express =require('express');
const bcrypt = require('bcryptjs');
const router =express.Router();
router.get('/',(req,res)=>{
    const salt = bcrypt.genSalt(10);
  
    res.json([salt]);
    

})
module.exports= router