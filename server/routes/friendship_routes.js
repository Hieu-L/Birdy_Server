import express from 'express';

import { 
    addFriend , 
    getListFriends ,
    getFriendRelationship ,
    deleteFriend
} 
from '../controllers/controller_friendship.js';


/* ====== Assigning controllers to the routes ====== */
const router = express.Router();


// [1] POST apifriends/user/{username}/friends : create a Friendship
router.post("/:username/friends", addFriend);

// [2] GET apifriends/user/{username}/friends : get all friends of a User
router.get("/:username/friends", getListFriends);

// [3] GET apifriends/user/{username}/friends/{friendid} : get relationship status of username concerning friend_username
router.get("/:username/friends/:friend_username",getFriendRelationship);

// [4] DELETE apifriends/user/{username}/friends/{friendid} : remove the friendship of username -> friend_username
router.delete("/:username/friends/:friend_username",deleteFriend);

export default router;