import User from "../model/User.js";


/* ======== get ALL USERS in the DATABASE ======== */

export const getAllUsers = async(req,res,next) => 
{    
    let users;
    
    // find all users that passes the filter : there's no filter here so this will return every user
    try { users = await User.find(); } 
    catch(e) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    // if no users (database empty) : error 404 ( not found )
    if (users.length === 0) { return res.status(404).json( { status : "404", msg : "Database has 0 users :( " } ); }

    // else : 200 ( OK )
    else { return res.status(200).json( { status : "200", users } ); }
}



/* ======== CREATE A USER in the DATABASE ======== */

export const signUp = async(req,res,next) =>
{
    // retrieve info sent from client side
    const {username, firstname, lastname, password, confirmpassword } = req.body;
    
    // test : does password match ?
    if ( password !== confirmpassword ) { return res.status(401).json({ status : "401", msg : "password doesn't match" }); }
    
    // test : is the username taken?
    let usernameTaken;
    
    try { usernameTaken = await User.findOne({ username }); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    if (usernameTaken) { return res.status(400).json( { status : "400", msg : "Username is taken, please choose another" } ); }

    // create a new user in the database
    const newUser = new User({ username, firstname, lastname, password, confirmpassword });

    try { let ok = await newUser.save(); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    return res.status(200).json({ status : "200", newUser });
}



/* ======== FIND A USER in the DATABASE ======== */

export const logIn = async(req,res,next) =>
{
    // retrieve info sent from client side
    const {username, password } = req.body;
    
    // test : username exists ?
    let user_exist ;
    try { user_exist = await User.findOne({ username }); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if (! user_exist ) { return res.status(404).json( { status : "404" , msg : "username doesn't exist"} ); }

    // test : password matches ?
    if ( password !== user_exist.password ) { return res.status(401).json( { status : "401" , msg : "password doesn't match"} ); }

    return res.status(200).json( { status : "200" , user_exist } );
}



/* ======== DELETE A USER in the DATABASE ======== */

export const deleteUser = async(req,res,next) =>
{
    // retrieve info sent from client side
    const username = req.params.username;
    
    console.log(username);
    // test : username exists ?
    let user_exist ;
    try { user_exist = await User.findOne({ username }); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if (! user_exist ) { return res.status(404).json( { status : "404" , msg : "username doesn't exist"} ); }
    
    try { let ok = await User.deleteOne({ username : username }); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    return res.status(200).json( { status : "200" , msg : "account deleted successfully" } );
}














