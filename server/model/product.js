const mongoose = require('mongoose');

/**
 * | Concept | Purpose |

 Schema** | Defines structure & validation rules for documents |
 Model** | Provides methods to interact with MongoDB (`find`, `create`, etc.) |
 timestamps** | Automatically tracks when data was created/updated |
 required** | Ensures mandatory fields must be filled |
 type** | Ensures correct data type is stored |
 */


const ProductSchema = new mongoose.Schema({
    name: {type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    qty:  {type:String,required:true},
    info: {type:String,required:true}
},{timestamps:true})

//to make short 
const Product = mongoose.model('Product',ProductSchema);
module.exports = Product