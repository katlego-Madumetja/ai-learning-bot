const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({

    title:{type:String,required:true},
    link:{type:String , required:true},
    category:{type:String, enum:['Bursary', 'Job', 'Training'], required:true},
    source:{type:String},
    CreatedAt:{type:Date,default:Date.now}
});

const alert = mongoose.mongoose.model('Alert', alertSchema);
module.exports = alert;