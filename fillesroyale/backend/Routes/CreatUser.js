const express = require('express')
const router = express.Router()
const User = require('../models/User')


const { body, validationResult } = require('express-validator');

//wenever /createuser point hits, it puch below data in our database
router.post("/creatuser"
   , async(req, res)=>{  //await(request, response)

      const errors= validationResult(req);
      if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()});
      }

     try {
     
        const { FirstName, LastName, EnrollmentNumber, Hostel, DOB, Department, EmailId } = req.body;

        // Log the extracted fields to ensure they are being populated correctly
        console.log({
            FirstName,
            LastName,
            EnrollmentNumber,
            Hostel,
            DOB,
            Department,
            EmailId
        });

      await User.create({
           FirstName: req.body.FirstName,
           LastName:req.body.LastName,
           EnrollmentNumber: req.body.EnrollmentNumber,
           Hostel: req.body.Hostel,
           DOB: req.body.DOB,
           Department: req.body.Department,
           EmailId: req.body.EmailId,
           date: Date.now() 
        })
    res.json({success:true});  //by this json responce, i get to know, my user is created

     } catch (error) {
        console.log(error)
        res.json({success:false});
     }
})

module.exports= router;



