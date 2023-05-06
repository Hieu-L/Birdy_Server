import express from 'express';

import { 
    addFriend , 
    getListFriends ,
    getFriendRelationship ,
    deleteFriend,
    getListFans
} 
from '../controllers/controller_friendship.js';


/* ====== Assigning controllers to the routes ====== */
const router = express.Router();


// [1] POST apifriends/user/{username}/friends : create a Friendship
router.post("/id_:username/friends", addFriend);

// [2] GET apifriends/user/{username}/friends : get all following of a User
router.get("/id_:username/friends", getListFriends);

// [3] GET apifriends/user/{username}/friends/{friendid} : get relationship status of username concerning friend_username
router.get("/id_:username/friends/id_:friend_username",getFriendRelationship);

// [4] DELETE apifriends/user/{username}/friends/{friendid} : remove the friendship of username -> friend_username
router.delete("/id_:username/friends/id_:friend_username",deleteFriend);

// [5] GET apifriends/user/{username}/fans : get all followers of a User
router.get("/id_:username/fans", getListFans);

export default router;