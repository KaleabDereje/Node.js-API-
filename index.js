const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route')

const app = express();

//allow to use json format in the body and send to the API using POST
app.use(express.json());

//allow to use form format in the body and send to the API using POST
app.use(express.urlencoded({extended: false}));

// install nodemon package either -g or -D for not to rerun the npm for every response change manually
app.get('/',(req, res)=>{
    res.send("Hello from Node API Server nodemon is the captain");
});

//use the route
app.use('/api/products/', productRoute);

/*make the API to view Products
app.get('/api/products', async (req, res) => {

});
*/

//retrieve the products by their id


//update a product


//delete a product 

//create a product


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
