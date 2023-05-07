import mongoose from "mongoose";

/*

This is our implementation of a TWEET : we call it MESSAGE here.

a MESSAGE has these specific attributes :
    - author : the username of the author
    - date : the date the message was written
    - text : the text written by the author
    
potential add-ons :
    - image : the image the author included in the message
    - comments : the comment thread on this tweet

*/


/* Schema helps to map to MongoDB ==> defines the SHAPE of a document */
const Schema = mongoose.Schema ; 


/* Schema to specify the data type, name, restrictions of a Friendship */
const messageSchema = ({
    
    // creator of the message
    author : { 
        type : String , 
        required : true 
    } ,

    image : {
        type : String,
    },
    
    // the text of the message
    text : { 
        type : String , 
        required : true 
    } ,

});


/* export the Schema of Message to MongoDB */
export default mongoose.model("Message", messageSchema);






