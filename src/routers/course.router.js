const express = require('express');
const { createCourse } = require('../controllers/courses.controller.js');

const router = express.Router();

router.post('/', createCourse);  // Handle POST request to create a course

module.exports = router;
