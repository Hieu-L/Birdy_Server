import Friendship from "../model/Friendship.js";
import User from "../model/User.js";



/* ======== create a FRIENDSHIP in the DATABASE ======== */

export const addFriend = async(req,res,next) =>
{
    // get info sent from client side
    const { friend : friend_username } = req.body;
    const username = req.params.username;

    // test : does username and friend_username exist?
    let username_ok; let friend_ok;

    try { username_ok = await User.findOne( {username : username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !username_ok ) { return res.status(404).json( { status : "404" , msg : "username doesn't exist"} ); } 

    try { friend_ok = await User.findOne( {username : friend_username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !friend_ok ) { return res.status(404).json( { status : "404" , msg : "friend username doesn't exist"} ); }     

    // test : does friendship exist already?
    let exists;
    try { exists = await Friendship.find( { username: username , friend : friend_username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if (exists !== []) { return res.status(400).json( { status : "400", msg : "you are already friends" } ); }

    // create a new friendship in the database
    const newFriendship = new Friendship({ username: username, friend : friend_username });

    try { let ok = await newFriendship.save(); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    return res.status(200).json({ status : "200", newFriendship });
}



/* ======== get ALL FRIENDS OF USER in the DATABASE ======== */

export const getListFriends = async(req,res,next) =>
{
    const username = req.params.username;
    let friendsList;

    // test : does username exist?
    let username_ok;
    try { username_ok = await User.findOne( {username : username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !username_ok ) { return res.status(404).json( { status : "404" , msg : "username doesn't exist"} ); } 

    // get list of friends

    try { friendsList = await Friendship.find( { username: username } ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    return res.status(200).json({ status : "200", friendsList });
}



/* ======== check if USERNAME is friends with FRIEND_USERNAME ======== */

export const getFriendRelationship = async(req,res,next) =>
{
    const username = req.params.username;
    const friend_username  = req.params.friend_username;

    // test : does username and friend_username exist?

    let username_ok; let friend_ok;

    try { username_ok = await User.findOne( {username : username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !username_ok ) { return res.status(404).json( { status : "404" , msg : "username doesn't exist"} ); } 

    try { friend_ok = await User.findOne( {username : friend_username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !friend_ok ) { return res.status(404).json( { status : "404" , msg : "friend username doesn't exist"} ); }     

    // return the friendship status of username and friend_username
    let isFriends; 

    try { isFriends = await Friendship.findOne( { username: username , friend : friend_username } ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if (isFriends) { return res.status(200).json({ status : "200", msg : "True" }); }
    else { return res.status(200).json({ status : "200", msg : "False" }); }
}

export const deleteFriend = async(req,res,next) =>
{
    const username = req.params.username;
    const friend_username  = req.params.friend_username;

    // test : does username and friend_username exist?

    let username_ok; let friend_ok;

    try { username_ok = await User.findOne( {username : username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !username_ok ) { return res.status(404).json( { status : "404" , msg : "username doesn't exist"} ); } 

    try { friend_ok = await User.findOne( {username : friend_username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !friend_ok ) { return res.status(404).json( { status : "404" , msg : "friend username doesn't exist"} ); } 
    

    // test : does this friendship between username and friend_username exist?
    let isFriends; 

    try { isFriends = await Friendship.findOne( { username: username , friend : friend_username } ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if (!isFriends) { return res.status(400).json( { status : "400", msg : "this friendship doesn't exist" } ); }

    try { let ok = Friendship.deleteOne({username : username, friend_username : friend_username}); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    return res.status(200).json({ status : "200", msg : "Friend removed successfully" });
}  


