const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"Please provide the name"]
        },
        
        email:{
            type: String,
            required: [true,"Please provide the email address"]
        },

        phone:{
            type: String,
            required: [true,"Please provide the phone number"]
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Contact',contactSchema);