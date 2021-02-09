const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json());

// parse requests of content-type - application/json
app.use(cors({
    origin:'http://localhost:8080'
}));

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ToDoList application."});
});

// Require Task routes
require('./app/routes/task.routes.js')(app);
// Require User routes
require('./app/routes/user.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
