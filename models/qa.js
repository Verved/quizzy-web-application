var mongoose=require('mongoose');

//Genre Schema
var qaSchema=new mongoose.Schema({
  topic:{
    type: String,
    required: true
  },
  qno:{
    type: Number,
    required: true
  },
  question:{
    type: String,
    required: true
  },
  options:{
    type: Array,
    required: true
  },
  answer:{
    type: String,
    required: true
  }


});

var qa=module.exports= mongoose.model('qa', qaSchema);
