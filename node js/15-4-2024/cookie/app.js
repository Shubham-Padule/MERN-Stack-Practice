const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser"); // Import cookie-parser
router.use=cookieParser();

// Import student module and route file
const stud = require("./modules/students");
const studentRoutes = require('./routes/studentRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // Use cookie-parser middleware

// Mount the studentRoutes on a specific path
app.use('/students', studentRoutes);

// Example route to set a cookie
app.get('/setcookie', (req, res) => {
    res.cookie('username', 'johnDoe', { maxAge: 900000, httpOnly: true }); // Set a cookie named 'username'
    res.send('Cookie has been set');
});

// Example route to read a cookie
app.get('/getcookie', (req, res) => {
    const username = req.cookies.username; // Read the value of the 'username' cookie
    res.send('Username: ' + username);
});


app.listen(3000, function() {
    console.log("server is listening at port 3000");
});
