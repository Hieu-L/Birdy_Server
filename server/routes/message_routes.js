import express from 'express';

import { 
    createMessage ,
    getUserMessage ,
    getAllMessage ,
    deleteMessage
} 

from '../controllers/controller_message.js';

/* ====== Assigning controllers to the routes ====== */
const router = express.Router();


// [1] POST /apimessages/user/username/messages : create a new message
router.post("/id_:username/messages", createMessage);

// [2] GET /apimessages/user/username/messages : get all messages of username
router.get("/id_:username/messages", getUserMessage);

// [3] GET /apimessages/user/messages : get all messages in the database
router.get("/messages", getAllMessage);

// [4] DELETE /apimessages/user/id_messageid : delete a specific message
router.delete("/id_:messageid", deleteMessage);


export default router;






