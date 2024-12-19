import mongoose, { mongo } from "mongoose";
import url from './url.js'

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : false,
        unique : false,
        sparse : true,
        default : null,
    },
    url : [url.schema]
})

export default mongoose.model('Users',userSchema);