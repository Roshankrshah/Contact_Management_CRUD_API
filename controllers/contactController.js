const asyncHandler = require('express-async-handler');

const getContacts = asyncHandler((req,res) => {
    res.send("you are at contact pages");
});

const createContact = asyncHandler((req,res) => {
    const {name, email, phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All field are mandatory");
    }
    console.log(req.body);
    res.send(`contact pages create with help of`);
});

const getContact = asyncHandler((req,res) => {
    res.send(`contact of ${req.params.id}`);
});

const updateContact = asyncHandler((req,res) => {
    res.send(`contact update of ${req.params.id}`);
});

const deleteContact = asyncHandler((req,res) => {
    res.send(`delete contact of ${req.params.id}`);
});

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};