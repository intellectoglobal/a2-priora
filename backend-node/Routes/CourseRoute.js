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

router.get('/', (req, res) => {
  CourseSchema.findAll()
      .then((users) => {
          res.status(200).json(users);
      })
      .catch((err) => {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
      });
});


router.put('/update-course/:id', async function(req, res, next) {
  // console.log(req.body,req.params.id)
try{
 
 let course = await CourseSchema.update(req.body,{where:{course_id:req.params.id}})

 res.json({
   success:true,
   data:course,
   message: 'Course successfully updated',
 });
}

catch(e){
 res.json({
   success:false,
   err:e,
   message: 'error updating course',
 });
}
});

router.route('/edit-course/:id').get((req,res)=>{
  CourseSchema.findByPK(req.params.id,(error,data)=>{
      if(error){
          return next(error)
      } else {
          res.json(data)
      }
  })
})

router.route("/delete-course/:id").delete((req,res,next)=>{
  CourseSchema.destroy({where:{course_id:req.params.id}},(error,data)=>{
      if(error){
          return next(error)
      }else{
          res.status(200).json({
              msg:data,
          })
      }
  })
})
module.exports = router;