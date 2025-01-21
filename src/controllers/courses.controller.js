const Course = require('../models/course.model.js');

// create Course
const createCourse = async (req, res) => {
    try {
        // Create a new course from the request body
        const course = new Course(req.body);

        // Save the course to the database
        await course.save();

        // Send a success response
        res.status(201).json({
            message: "Course is created successfully",
            course: course
        });
    } catch (error) {
        // Handle errors and send an error response
        res.status(400).json({ message: error.message });
    }
};


// Get Course 
const getCourse = async (req,res ) => {
    try {

        const course = await Course.find () ; 
        res.status(200).json(course);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update Course 

// const updateCourse = async (req, res) => 
// {
//     try {
//         let updateData = req.body
//     }  
//     catch (error){
//         res.status(500).json({ message: error.message });

//     }
// }

module.exports = { createCourse ,getCourse , updateCourse };
