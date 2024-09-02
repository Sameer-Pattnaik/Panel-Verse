import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    
    price:String,
    category:String,
    image:String,
    descrption:String,
    title:String
})
const Book=mongoose.model("Book",bookSchema);

export default Book;