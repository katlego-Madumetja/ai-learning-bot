//Importing Packages
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//import routes
const alertRoutes = require('./routes/alert.routes');

//Load Environment Variables from .env file
dotenv.config();


//Connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
  .catch(err => console.error('Connection error', err));

//Initailzing the express app
const app= express();

app.use(express.json());

//Simple Test Routes
app.get('/', (req,res) =>{

   res.send("Hello , Kasi Youth! Your Career Bot is running!");

});


//Use the Routes
app.use('/api/alerts', alertRoutes); // Use the router for any path starting with /api/alerts


//Get a Port

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{


    console.log('Server running on PORT:' , PORT);

});

