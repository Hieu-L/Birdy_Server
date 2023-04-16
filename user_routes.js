import express from 'express';

import { 
    getAllUsers,
    signUp,
    logIn,
    deleteUser,
    getUser,
    modifyUser
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

// [4] DELETE api/user/username/delete : delete an existing User 
router.delete("/id_:username", deleteUser);

// [5] GET api/user/username : get an user's information
router.get("/id_:username", getUser);

// [6] PUT api/user/username : get an user's information
router.put("/id_:username", modifyUser);



export default router;