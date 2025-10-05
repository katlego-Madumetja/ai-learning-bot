const mongoose = require('mongoose');

const cvRequestSchema = new mongoose.Schema({

    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    inputDate:{type:Object,required:true},
    aiResponse:{type:String},
    status:{type:String, enum:['pending','completed'],default:'pending'},
    createdAt:{type:Date , default:Date.now}

});

const CVRequest = mongoose.model('CVRequest',cvRequestSchema);
module.exports = CVRequest;