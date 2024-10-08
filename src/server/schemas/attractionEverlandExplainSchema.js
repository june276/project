import { Schema, model } from "mongoose";

const EverlandExplainSchema = new Schema({
  id:{type : String, unique : true, required : true},
  title:{type:String, required:true},
  description:{type:String},
  image : {type : String},
  height : {type : String}
})

export default model("AttractionEverlandExplain", EverlandExplainSchema);