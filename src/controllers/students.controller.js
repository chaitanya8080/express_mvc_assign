

const express = require("express");

const User = require("../models/students.model.js");

const router = express.Router();


router.get("", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.status(200).send(users); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "1" });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const users = await User.findById().lean().exec();
  
      return res.status(200).send(users); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "2" });
    }
  });

  router.post("", async (req, res) => {
    try {
      const users = await User.create(req.body);
  
      return res.status(201).send(users); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "3" });
    }
  });

  router.patch("/:id", async (req,res) => {
      try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(user)
      } catch (error) {
         return  res.status(500).send({messege : error.messege})
         
      }
      
  })


  router.delete("/:id",async (req,res)=>{
      try {
          
        const user = await User.findByIdAndDelete(user);
        return res.status(200).send(user);
      } catch (error) {
        return res.status(500).send({ message: error.message });
      }
  })

  module.exports = router;