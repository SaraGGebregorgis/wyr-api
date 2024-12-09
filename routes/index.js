//import express to handle routing
const express = require('express')

//create a new router instan
const router = express.Router()

//import the func to get a random wyr qu
const randomWYRQuestion = require('../model/wyr_questions')

router.get('/', function(req, res, next){
    res.send('Placeholder for home page') //simple placeholder response
})

//wyrtoute
router.get('/wyr', function(req, res, next) {
    //const wyr = {
      //  'question': 'Like in a circle house or a triaangle house',
       // 'answer1': 'Circle house',
       // 'answer2': 'Triangle house'
    //}
    const wyr = randomWYRQuestion() //get a random wyr question
    res.json(wyr) // return the question
})

//export the router to be used in other part of the app
module.exports = router