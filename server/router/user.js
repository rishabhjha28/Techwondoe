const express = require('express');
const router = express.Router();
require("../db/connection");
const User = require("../model/userSchema");

router.get('/',async(req,res)=>{
    const {page,perPage} = req.query
    const skips = perPage*(page-1);
    const userData = await User.find().skip(skips).limit(perPage)
    if(userData){
        res.json(userData)
    }
    else{
        console.log("error")
        res.json(userData)
    }
})

router.post('/',async(req,res)=>{
    const data =new User(req.body)
    data.save()
    .then(response=>{
        res.json(response)
    })
    .catch(error=>{
        console.log(error)
        res.json(error)
    })
})

router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    res.json(user)
})

router.patch('/:id',async(req,res)=>{
    const id = req.params.id
    const data = req.body
    User.findByIdAndUpdate(id,data,(err,doc)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json(doc)
        }
    })
})

module.exports = router;