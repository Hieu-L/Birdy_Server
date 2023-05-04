import express from 'express';

import { 
    getAllUsers,
    signUp,
    logIn,
    logOut,
    deleteUser,
    findUser
} 
from '../controllers/controller_user.js';


/* ====== Assigning controllers to the routes ====== */
const router = express.Router();


// [1] GET api/user/all : get all users in Database
router.get("/all", getAllUsers);

// [2] POST api/user/signup : create a new User 
router.post("/signup", signUp);

// [3] POST api/user/signin : find an existing User 
router.post("/signin", logIn);

// [4] POST api/user/logout : end session
router.delete("/logout", logOut);

// [5] POST api/user/id_username/delete : delete an existing User 
router.post("/id_:username/delete", deleteUser);

// [6] GET api/user/id_username
router.get("/id_:username", findUser);

export default router;