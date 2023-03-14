const express = require("express");
const router = express.Router();
const CourseRegisterSchema=require("../Models/CourseRegisterModel");

router.post("/courseregisterdata", (req, res) => {
    CourseRegisterSchema.create(req.body)
    // console.log(req.body)
      .then((course) => {
        res
          .status(201)
          .json({ message: "Course created successfully", data: course });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      });
  });

  module.exports = router;