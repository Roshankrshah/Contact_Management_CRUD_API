const express = require('express');
const app = express();

port = process.env.PORT || 5000;

app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () =>{
    console.log(`Server listening at http://localhost:${port}`);
})