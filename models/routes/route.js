const express = require('express');
const route = express.Router();
const tasks = require('../models/tasksmodel'); 
const bodyParser = require('body-parser');



route.post('/Tasks',async (req,res)=>{
    
        const{nom,description,status}=req.body;
    let new_Tasks = new Tasks({
        nom:req.body.nom,
        description:req.body.description,
        status:req.body.status
    }) 
    await new_Tasks.save()
    res.send('valide')
    
})
module.exports=route