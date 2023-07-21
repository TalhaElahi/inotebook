const mongoose =require('mongoose');

const UserSchema = new Schema({
     // String is shorthand for {type: String}
    title: {
        type:String,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    tag: {
        type:String,
        default:"General"
    },
    date: {
        type:Date,
        default:Date.now,
    },
       });
       modules.export=mongoose.model('notes',UserSchema);