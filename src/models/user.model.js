const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name:{type:String},
    phone:{type:String,required:true,unique:true},
    email:{type:String,unique:true},
    marks:{type:Map, of:String},
    interests:[string],
    createdAt:{type:Date , default:Date.now}

});

const User = mongoose.model('User', UserSchema);
module.exports = User;