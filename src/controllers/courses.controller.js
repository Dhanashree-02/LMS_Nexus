const Course = require('../models/course.model.js');

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

module.exports = { createCourse };
