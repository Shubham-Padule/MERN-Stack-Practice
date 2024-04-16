// app.js

// Require necessary modules
var express = require('express');
var session = require('express-session');
var routes = require("./routes");

// Create an Express application
var app = express();

// Set up session middleware
app.use(session({
    msg: "Session set!",
    resave: true,
    saveUninitialized: false,
    secret: "hello"
}));

// Use routes defined in routes.js
app.use("/studApp", routes);

// Define port and start the server
var port = 3000;
app.listen(port, function() {
    console.log("Server is listening at port " + port);
});
