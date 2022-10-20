
const express = require('express');
const app = express();   // create express app
const port = process.env.PORT || 8888;  // 8888 is the default port
const bodyParser = require('body-parser'); // parse request body
const mongoose = require('mongoose'); // connect to mongodb



require('dotenv').config();  // load environment variables
MONGODBURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.1nbqg16.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
mongoose.connect(MONGODBURL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB', err));  // connect to mongodb

 
// app.use(bodyParser()); // for parsing application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
);

// Load Routes
app.use('/', require('./routes/admin/auth'));
app.use('/', require('./routes/category'));
app.use('/', require('./routes/products'));


