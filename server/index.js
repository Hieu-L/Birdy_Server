
import express from 'express'; 
import mongoose from 'mongoose'; 
import session from 'express-session';
import cors from 'cors';
import user_router from './routes/user_routes.js';
import friendship_router from './routes/friendship_routes.js';
import message_router from './routes/message_routes.js';



/* =======[ MAPPING URL TO SPECIFIC ROUTERS ]========= */

// using json and session
const app = express();

app.use(express.json());
app.use(session({ secret: "technoweb rocks" }));
app.use(cors());



app.use("/api/user",user_router);
app.use("/apifriends/user",friendship_router);
app.use("/apimessages/user",message_router);


/* ==============[ STARTING THE SERVER ]============== */

mongoose
    /* connect to the database : MONGODB */
    .connect('mongodb+srv://admin:tegvym212@cluster0.2yd8so4.mongodb.net/test')

    /* start listening to port 8000 : msg to and from the server will pass thru here */
    .then( ()=>app.listen(3001,'localhost') )

    .then( ()=>console.log("\n we...are...listening...on port 8000... 0-0 \n"))

    /* catch in case of failure to connect to Mongodb OR to listen on 8000 */
    .catch( (error) => console.log("can't start the server => " + error) ) 

