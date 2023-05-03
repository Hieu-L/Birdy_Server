import mongoose from "mongoose";

/* Schema helps to map to MongoDB ==> defines the SHAPE of a document */
const Schema = mongoose.Schema ; 


/* Schema to specify the data type, name, restrictions of a User */
const userSchema = ({
    
    /* for our Project, we will consider each USERNAME to be UNIQUE */
    username : {
        type : String,
        required : true,
        unique : true
    }
    ,
    firstname : {
        type : String,
        required : true,
    }
    ,
    lastname : {
        type : String,
        required : true
    }
    ,
    password : {
        type : String,
        required : true
    }

});

/* export the Schema of User to MongoDB */
export default mongoose.model("User", userSchema);