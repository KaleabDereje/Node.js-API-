const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route')

const app = express();

//allow to use json and send to the API using POST
app.use(express.json());

// install nodemon package either -g or -D for not to rerun the npm for every response change manually
app.get('/',(req, res)=>{
    res.send("Hello from Node API Server nodemon is the captain");
});

//ause the route
app.use('/api/products/', productRoute);

//make the API to view Products
app.get('/api/products', async (req, res) => {

});


//retrieve the products by their id
app.get('/api/products/:id', async (req, res) =>{
    
});


//update a product
app.put('/api/products/:id', async (req, res) => {

    try{
        const { id } = req.params;
        const product =  await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = Product.findById(id);
        res.status(200).json(updatedProduct);

    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
});


//delete a product 
app.delete('/api/products/:id', async (req, res) =>{

    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        
        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({messsage: "Product Deleted"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
});


app.post('/api/products', async (req, res) => {
    
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
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
