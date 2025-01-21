const mongoose = require ('mongoose')

const courseSchema = new mongoose.Schema (
    {
        _id :{
            type : String,
            require : true
        },
        course_name : {
            type : String,
            require : true
        },
        instructor_id : {
            type : String,
            require : true
        },
        course_description : {
            type : String,
            require : true
        },
        course_duration : {
            type : String,
            require : true
        },
        syllabus: {
            type : String,
            require : true
        }, 
        fees: {
            type: String,
            require: true
        },
        modal : {
            type : String,
        },
        exam : {
            type : String,

        },
        course_image : {
            type : String,
            require : true
        },


    }
)
module.exports = mongoose.model ('Course' , courseSchema )