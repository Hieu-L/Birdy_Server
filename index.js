
import express from 'express'; 
import mongoose from 'mongoose'; 
import user_router from './routes/user_routes.js';
import friendship_router from './routes/friendship_routes.js';



/* =======[ MAPPING URL TO SPECIFIC ROUTERS ]========= */

const app = express();
app.use(express.json());
app.use("/api/user",user_router);
app.use("/apifriends/user",friendship_router);



/* ==============[ STARTING THE SERVER ]============== */

mongoose
    /* connect to the database : MONGODB */
    .connect('mongodb+srv://admin:tegvym212@cluster0.2yd8so4.mongodb.net/?retryWrites=true&w=majority')

    /* start listening to port 8000 : msg to and from the server will pass thru here */
    .then( ()=>app.listen(8000) )

    .then( ()=>console.log("\n we...are...listening...on port 8000... 0-0 \n"))

    /* catch in case of failure to connect to Mongodb OR to listen on 8000 */
    .catch( (error) => console.log("can't start the server => " + error) ) 

