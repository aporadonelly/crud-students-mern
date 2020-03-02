const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()

//Student model
let Student = require('../Models/Student')

//Create student
router.route('/create-student').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
        if(error) {
            return next(error)
        }else{
            console.log(data)
            return res.status(200).json({data, message: "User created"})
        }
    })
})

//read all students
router.route('/').get((req, res) => {
    Student.find((err, data) => {
        if(err){
            return next(err)
        }else{
            return res.json(data)
        }
    })
})


//get single students
router.route('/edit-student/:id').get((req, res) => {
    Student.findById(req.params.id, (err, data) => {
        if(err){
            return next(err)
        }else {
            return res.status(200).json(data)
        }
    })
})


// Update Student
router.route('/update-student/:id').put((req, res, next) => {
    Student.findByIdAndUpdate(req.params.id, {        
      $set: req.body      
    }, (error, data) => {
      if (error) {
        console.log(error)
        return next(error);
      } else {
        res.json(data)
        console.log('Student updated successfully!')
      }
    })
  })
  


//delete student
router.route('/delete-student/:id').delete((req, res, next) => {
    Student.findOneAndRemove(req.params.id, (err, data) => {
        if(err){
            return next(err)
        }else{
            return res.status(200).json({msg: "Deleted"})
        }
    })
})

module.exports = router;