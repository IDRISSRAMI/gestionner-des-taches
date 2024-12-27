const mongoose = require('mongoose')
const tasksSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: { 
        type: Boolean,
       
    },
});

const tasks = mongoose.model('tasks', tasksSchema);
module.exports = tasks;