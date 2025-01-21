const express = require('express');
const { createCourse, getCourse , updateCourse} = require('../controllers/courses.controller.js');

const router = express.Router();

router.post('/', createCourse); 
router.get ('/' , getCourse)

module.exports = router;
