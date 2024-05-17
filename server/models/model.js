const mongoose =require('mongoose')
const taskSchema=new mongoose.Schema({
    todo:String,
    isComplete:Boolean
})
const Task=mongoose.model('task',taskSchema)
module.exports=Task 