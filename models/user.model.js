const mongoose= require("mongoose");
const detailSchema=mongoose.Schema({
    name:String,
    email:String,
    website:String,
    mob:Number
   
})
const DetailModel=mongoose.model("detail",detailSchema)

module.exports={
    DetailModel
}