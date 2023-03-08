const express = require('express');
const router = express.Router();
const CourseSchema=require('../Models/CourseModel');

router.route("/coursedata").post((req,res,next)=>{
    CourseSchema.create(req.body,(error,data)=>{
              if(error){
                return next(error)
              }else{
                console.log(data)
              }

    })
})
module.exports = router;