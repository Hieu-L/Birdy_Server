import Message from "../model/Message.js";
import User from "../model/User.js";
import { ObjectId } from "mongoose";

/* ======== create a MESSAGE in the DATABASE ======== */

export const createMessage = async(req,res,next) => 
{
    const username = req.params.username;
    const { author, image, text } = req.body;

    // test : does username exist?
    let username_ok;
    try { username_ok = await User.findOne( { username : username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }

    if ( !author || !text ) { return res.status(400).json( { status : "400" , msg : "missing information"} ); } 
    
    const newMessage = new Message( { author, image, text } );

    try { let ok = await newMessage.save(); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    return res.status(200).json({ status : "200", newMessage });
}



/* ======== find every MESSAGE of USERNAME in the DATABASE ======== */

export const getUserMessage = async(req,res,next) => 
{
    const username = req.params.username;

    // test : does username exist?
    let username_ok;

    try { username_ok = await User.findOne( { username : username} ); }
    catch(error) { return res.status(500).json({ status : "500", msg : "can't connect to the database" }); }
    
    let messages ;
    
    try { messages = await Message.find( { author : username } ); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    return res.status(200).json( { status : "200", messages } );
}



/* ======== find every MESSAGE in the DATABASE ======== */

export const getAllMessage = async(req,res,next) => 
{
    let messages ;
    
    try { messages = await Message.find( {} ); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    return res.status(200).json( { status : "200", messages } );
}



/* ======== delete a MESSAGE in the DATABASE ======== */

export const deleteMessage = async(req,res,next) => 
{
    const id = req.params.messageid ; 
    console.log(id);

    try { let ok = await Message.deleteOne( { _id :  id } ); }
    catch(error) { return res.status(500).json( { status : "500" , msg : "can't connect to database"} ); }

    return res.status(200).json( { status : "200", msg : "Deleted successfully"} );
}



