require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose')
const todoController = require('./contorllers/todoController');
const PORT = process.env.PORT ||4000;
const server = express();

const mongo_db_url = ''

// const mongo_db_url = 'mongodb://localhost/todos_db';
server.use(express.json());


server.listen(PORT, function(){  
    console.log('Server has started running in express');
    mongoose.connect(process.env.MONGO_DB_ATLAS_URL)
    .then (function(){
        console.log('DB is connected');
        server.get('/',function(req, res){
            res.status(200).json( {success: true, message: 'WELCOME, this is Jannats todo node App'})
        });
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