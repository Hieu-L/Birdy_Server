import Friendship from "../model/Friendship.js";




/* ======== create a FRIENDSHIP in the DATABASE ======== */

export const addFriend = async(req,res,next) =>
{
    // get info sent from client side
    const { friend : friend_username } = req.body;
    const username = req.params.username;

    // test : does friendship exist already?
    let exists;
    try { exists = await Friendship.find( { username: username , friend : friend_username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    console.log(exists)

    if (exists !== []) { return res.status(400).json( { status : "400", msg : "you are already friends" } ); }

    // create a new friendship in the database
    const newFriendship = new Friendship({ username: username, friend : friend_username });

    try { let ok = await newFriendship.save(); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    return res.status(200).json({ status : "200", newFriendship });
}



/* ======== get ALL FRIENDS OF USER in the DATABASE ======== */

export const getAllFriends = async(req,res,next) =>
{
    const username = req.params.username;
    let friendsList;

    try { friendsList = await Friendship.find( { username: username } ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    return res.status(200).json({ status : "200", friendsList });
}

