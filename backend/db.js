const mongoose = require('mongoose');
// const mongoURI ="mongodb://localhost:27017/inotebook?directConnection=true&readPreference=primary";
mongoURI="mongodb+srv://kadaj_007:talha12345@cluster1.bjafdnd.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDB");
    });
}
// const a=console.log("aaa");
module.exports=connectToMongo;