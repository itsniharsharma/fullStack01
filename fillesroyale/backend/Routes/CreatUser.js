const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');


//wenever /createuser point hits, it puch below data in our database
router.post("/creatuser",
   // Express-validator middleware for validation
  [
   body('FirstName').notEmpty().withMessage('First name is required'),
   body('LastName').notEmpty().withMessage('Last name is required'),
   body('EnrollmentNumber').notEmpty().withMessage('Enrollment number is required'),
   body('Hostel').notEmpty().withMessage('Hostel is required'),
   body('DOB').notEmpty().withMessage('Date of birth is required'),
   body('Department').notEmpty().withMessage('Department is required'),
   body('EmailId').isEmail().withMessage('Valid email is required')
 ]

   , async(req, res)=>{  //await(request, response)

      const errors= validationResult(req);
      if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()});
      }

     try {
     
        const { FirstName, LastName, EnrollmentNumber, Hostel, ContactNumber, DOB, Department, EmailId } = req.body;

        // Log the extracted fields to ensure they are being populated correctly
        console.log({
            FirstName,
            LastName,
            EnrollmentNumber,
            Hostel,
            ContactNumber,
            DOB,
            Department,
            EmailId
        });

      await User.create({
           FirstName: req.body.FirstName,
           LastName:req.body.LastName,
           EnrollmentNumber: req.body.EnrollmentNumber,
           Hostel: req.body.Hostel,
           ContactNumber: req.body.ContactNumber,
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



