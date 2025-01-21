const express = require ('express');
const connectDB = require('./src/config/db');
const router = require ('./src/routers/course.router.js')

require ('dotenv').config();
const app = express();

connectDB()
app.use (express.json())

app.use ('/course', router)

const PORT = process.env.PORT || 3000

app.listen (PORT , () => {
    console.log (`Server is running on port ${PORT}`);
})