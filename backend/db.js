const mongoose = require('mongoose');
const mongoURI ="mongodb://localhost:27017/inotebook?directConnection=true&readPreference=primary";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDB");
    });
}
// const a=console.log("aaa");
module.exports=connectToMongo;