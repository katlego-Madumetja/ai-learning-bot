const express = require('express');
const Alert = require('../models/alert.model');
const router = express.Router();

//Post EndPoint will be called by n8n workflow

router.post('/',async(req,res)=>{

    
    try{

        //Basic Security : Check for a Security header
        const secret = req.header('X-N8N-SECRET');

        if(secret !== process.env.N8N_SECRET_TOKEN){

            return res.status(401).send('Unathorized');
        }

        const{title,link,category,source} = req.body;

        if(!title || !link || !category){
            return res.status(400).send('Missing required fields');
        }

        const newAlert = new Alert({title,link,category,source});
        await newAlert.save();
        res.status(201).send(newAlert);

    }catch(error){

        res.status(500).send({message:'Error creating Alert',error});
    }
});

module.exports=router;