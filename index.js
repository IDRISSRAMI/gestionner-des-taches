const express = require('express')
const mongoose = require('mongoose');
const route = require('./routes/route'); 
const bodyParser  = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use('/api',route);

const connectDB = async () => {
    
        await mongoose.connect("mongodb://localhost://127.0.0.1:27017/DATA");
        console.log("Database connected successfully");
    }


connectDB();
app.listen(5000,()=> console.log("serveur  run succes"))