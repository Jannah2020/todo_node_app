//importing mongoose
//use the schema
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
 title : {
     type  : String,
     required: [true , 'Title is required']
 },
 description :  {
    type  : String,
    required: [true, 'Description is']
},
 deadline : {
    type  : Date,
    required: [true, 'Deadline is required']
},
 isCompleted :  {
    type  : Boolean,
    def: false
},
},{timesStamps: true});

const todo = mongoose.model('todo', todoSchema);
module.exports = todo;