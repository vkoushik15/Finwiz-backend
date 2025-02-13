const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const app = express();
const port = 3000

// Log the URI to verify it's loaded


// Only require the DB connection after dotenv is configured
const Db = require('./conn/conn');
const userroutes = require('./routes/userroutes');
const caroutes = require('./routes/caroutes');
const zquizroutes = require('./routes/zquizroutes');
const wtrroutes = require('./routes/wtrroutes');

app.use(express.json());
const cors = require('cors');   
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/user',userroutes);
app.use('/ca',caroutes);
app.use('/zquiz',zquizroutes);
app.use('/wtr',wtrroutes);

Db.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err)=>{
    console.log(err);
});
