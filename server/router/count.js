const express = require('express')
const router = express.Router();
require("../db/connection");
const User = require("../model/userSchema");


router.get('/',async(req,res)=>{
    const totalUserCount = await User.count()
    res.json(totalUserCount)
})

module.exports = router;