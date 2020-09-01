const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var commentSchema = new Schema({
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var leaderSchema = new Schema({
    name: {
        
        type: String,
        required: true,
        unique: true
    },
    image: {
        image: images/alberto.png,
        type: String,
        required: true
    },
    designation:{
        type:String,
        required:true
    },
    abbr:{
        type:String,
        required:true
    },

    description: {
       
        type: String,
        required: true
    },
    
    featured: {
        type: Boolean,
        default:false      
    },
    comments:[commentSchema]
}, {
    timestamps: true
});
var leaders=mongoose.model('leaders',leaderSchema);
module.exports=leaders;