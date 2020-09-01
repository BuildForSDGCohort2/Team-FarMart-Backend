const express = require('express');
const app = express();
const port=process.env.PORT||7000;
const connectDB = require('./database/db');


connectDB();


app.get('/', (req, res) => {
    res.send("Hello Farmart Server!");
})



app.listen(port, () => console.log(`Server Stated at localhost://${port}`));