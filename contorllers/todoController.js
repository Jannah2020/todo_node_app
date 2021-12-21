// Basic functions are created in the conroller

const req = require('express/lib/request');
const res = require('express/lib/response');
const todo = require('../models/todo');

// async function insertTodo(req, res)

 function insertTodo(req, res){
     console.log(req.body); 
     todo.create(req.body)   
     .then(function(){
        res.status(200).json ('Data has been created')
     })
     .catch(function(error){
         console.log('Not created'+error.message);
     });
 }



 function updateTodoById(){
     const {id} = req.params.id;
     const {isComplrted} = req.body;
     todo.findByIdAndUpdate(id)
     .then(function(){
         res.status(200).json({success: true,message: 'Todo has been updated successfully'})
     })
     .catch(function(){
        console.log('Cant update'+error.message);
        res.status(404).json({success: false, message: 'Todo Cant update. Please try again'});
     })

 }
 function deleteTodoById(req, res){
     const {id} = req.params.id;
     todo.findByIdAndDelete(id)
     .then(function(){
         res.status(200).json( { success: true,message: 'Todo is deleted successfully'});
     })
     .catch(function(error){
        console.log('Cant Delete'+error.message);
        res.status(404).json({success: false, message: 'Cant delete todo please check'});
    });

 }
 function getTodoById(){
    const {id} = req.params;
    //  console.log(req.params.id);
    todo.findById(id)
    .then(function(data){
        res.status(200).json({
            success:true,data 
        })
    })


} 
 function getAllTodos(req, res){
     todo.find({})
     .then(function(data){
        res.status(200).json ({success:true, data})
     })
     .catch(function(error){
        res.status({success: false, error:'Cant get data' +error.message });
    })

 }
 

 module.exports = {
    insertTodo,updateTodoById,deleteTodoById,getTodoById,getAllTodos
 }


