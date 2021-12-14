const express = require('express');

const mongoose = require('mongoose')
const server = express();

const mongo_db_url = 'mongodb+srv://Sharah:Wrongpassc0de@cluster0.e0mns.mongodb.net/todo_db?retryWrites=true&w=majority'

server.get('/tasks', function(req, res){
    res.status(200).json('All tasks has been granted');
}); 
server.post('/tasks', function(req, res){
    res.status(200).json('All tasks has been granted');
});
server.put('/tasks', function(req, res){
    res.status(200).json('All tasks has been modified');
});
server.delete('/tasks', function(req, res){
    res.status(200).json('All tasks has been deleted');
});

server.listen(4000, function(){
    console.log('Server has started running in express');
});