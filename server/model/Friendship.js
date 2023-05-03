import mongoose from "mongoose";

/*

/!\ Our implementation of a friendship is based off of popular social media sites like Facebook or Instagram :

    (A) may add (B) as a friend. 
    (A)'s friend list will then include (B), but (B)'s friend list won't change.
    to include (A) in (B)'s friend list, (B) has to add (A) as a friend as well.

*/


/* Schema helps to map to MongoDB ==> defines the SHAPE of a document */
const Schema = mongoose.Schema ; 


/* Schema to specify the data type, name, restrictions of a Friendship */
const friendshipSchema = ({
    
    // the person establishing the friendship
    username : { 
        type : String , 
        required : true 
    } ,
    
    // the friend they want to connect with
    friend : { 
        type : String , 
        required : true 
    }

});

/* export the Schema of Friendship to MongoDB */
export default mongoose.model("Friend", friendshipSchema);