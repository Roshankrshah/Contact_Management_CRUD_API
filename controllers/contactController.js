const getContacts = (req,res) => {
    res.send("you are at contact pages");
};

const createContact = (req,res) => {
    res.send("contact pages create with help of");
};

const getContact = (req,res) => {
    res.send(`contact of ${req.params.id}`);
};

const updateContact = (req,res) => {
    res.send(`contact update of ${req.params.id}`);
}

const deleteContact = (req,res) => {
    res.send(`delete contact of ${req.params.id}`);
};

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};