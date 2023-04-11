import express from 'express';

import { 
    addFriend , 
    getAllFriends
} 
from '../controllers/controller_friendship.js';


/* ====== Assigning controllers to the routes ====== */
const router = express.Router();


// [1] POST apifriends/user/{username}/addFriend : create a Friendship
router.post("/:username/addFriend", addFriend);

// [2] GET apifriends/user/{username}/all : get all friends of a User
router.get("/:username/all", getAllFriends);

export default router;