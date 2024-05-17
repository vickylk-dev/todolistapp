const express = require('express')
const Task=require('../models/model')
const router = express.Router()
router.get('/',(req,res)=>{ 
    Task.find((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})
router.post('/',(req,res)=>{
    const task=new Task(req.body)
    task.save((err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})
router.put('/:id',(req,res)=>{
    Task.findOneAndUpdate({
        _id:req.params.id
    },req.body,{
        new:true
    },(err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })
})
router.delete('/:id',(req,res)=>{
    Task.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(err) console.log(err)
        res.json(docs)
    })  
})
module.exports=router
