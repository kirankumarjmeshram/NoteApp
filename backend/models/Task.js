const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String},
    status:{type:String, enum:['pending', 'in-progress','completed'], default:'pending'},
    dueDate:{type:Date},
    owner:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    project:{type: mongoose.Schema.Types.ObjectId, ref:'Project'}
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;