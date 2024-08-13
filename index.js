const express = require('express');
const mongoose = require('mongoose');

const app = express();


// install nodemon package either -g or -D for not to rerun the npm for every response change manually
app.get('/',(req, res)=>{
    res.send("Hello from Node API Server nodemon is the captain");
});

mongoose.connect("mongodb+srv://kaleabdereje388:6bMAqz2JpOsVcJEN@nodeapidb.3kscs.mongodb.net/?retryWrites=true&w=majority&appName=NodeAPIDB")
.then(()=>{
    console.log("Connected to CRUD NodeAPI database");
    app.listen(3000, () =>{
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("Connection failed");
});

//model is structure of the data to store data into a database
