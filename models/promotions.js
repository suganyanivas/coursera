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

var promoSchema = new Schema({
    name: {
        
        type: String,
        required: true,
        unique: true
    },
    image: {
        image: "images/buffet.png",
        type: String,
        required: true
    },
    
    label: {
        type: String,
        default: ''
    },
    price: {
        price: "19.99",
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        description: "Featuring . . .",
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
var promotions=mongoose.model('promotion',promoSchema);
module.exports=promotions;