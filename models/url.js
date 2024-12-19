import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    urlId : {
      type : String,
      required : true,
    },
    origUrl : {
      type : String,
      required : true,
    },
    shortUrl : {
      type : String,
      required : true,
    },
    clicks : {
      type : Number,
      required : true,
      default : 0, 
    },
  },
  { timestamps: true }
);


export default mongoose.model('Url',urlSchema);
