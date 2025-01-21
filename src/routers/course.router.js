const express = require('express');
const { createCourse, getCourse , updateCourse} = require('../controllers/courses.controller.js');
const { upload } = require("../middlewares/multer.middlerware.js"); // Multer middleware

const router = express.Router();

router.post('/', upload.single("image"),  createCourse); 
router.get ('/' , getCourse)

module.exports = router;
