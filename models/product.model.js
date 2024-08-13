//model is structure of a data/document to store a data into a database

const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,
            required: [true, "Please enter product price"]
        },

        img: {
            type: String,
            required: true,
        }
    }
    );
