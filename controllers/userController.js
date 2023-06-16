const asyncHandler = require('express-async-handler');
//const Contact = require('../models/contactModel')

const registerUser = asyncHandler(async (req,res)=>{
    res.send("Register");
});

const loginUser = asyncHandler(async (req,res)=>{
    res.send("Login");
});

const currentUser = asyncHandler(async (req,res)=>{
    res.send("Current");
});

module.exports = {registerUser, loginUser, currentUser};