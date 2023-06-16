const express = require('express');
const errorHandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();


port = process.env.PORT || 5000;


app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);


app.listen(port, () =>{
    console.log(`Server listening at http://localhost:${port}`);
})