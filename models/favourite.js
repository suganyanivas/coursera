var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var favouriteSchema = new Schema({
   user:{
       type:Schema.Types.ObjectId,
       ref:'User',
       unique:true,
       required:true
   },
   dishes:[{
       type:Schema.Types.ObjectId,
       ref:'Dish',
   }]
},{ timestamps:true
    
});

const favourites=mongoose.model('Favourite',favouriteSchema);

module.exports =favorites




