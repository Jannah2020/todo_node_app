const express = require('express');

const mongoose = require('mongoose')
const todoController = require('./contorllers/todoController');
const server = express();

const mongo_db_url = 'mongodb+srv://Sharah:Wrongpassc0de@cluster0.e0mns.mongodb.net/todo_db?retryWrites=true&w=majority'

// const mongo_db_url = 'mongodb://localhost/todos_db';
server.use(express.json());


server.listen(4000, function(){
    console.log('Server has started running in express');
    mongoose.connect(mongo_db_url)
    .then (function(){
        console.log('DB is connected');
        server.get('/todos',todoController.getAllTodos); 
        server.get('/todo/:id',todoController.getTodoById); 
        server.post('/todo',todoController.insertTodo);
        server.put('/todo', todoController.updateTodoById);
        server.delete('/todo/:id',todoController.deleteTodoById);
    })
    .catch (function(error){
        console.log('DB is not connected:',error.message);
    })
});