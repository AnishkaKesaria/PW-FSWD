require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const connectToDb = require('./config/config.js');

//Express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

connectToDb()

const userRoutes = require('./routes/userRoutes.js');

app.use('/', userRoutes);

module.exports = app;