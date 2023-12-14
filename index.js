const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db.js");
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5001;
app.get('/', (req, res) => {
    res.send("Welcome To Nodejs Backend Server")
})

// userRoute Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// api for user
app.use('/api/user', require("./routes/userRoute.js"))


db.query('SELECT 1').then(() => {
    console.log("Database connection succeeded!!");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })

}).catch((error) => {
    console.log(error);
})

