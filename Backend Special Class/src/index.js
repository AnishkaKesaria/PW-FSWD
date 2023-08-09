// console.log("Hello, created by Anishka!");

// import express from "express"
import mongoose from 'mongoose';
import app from './app.js'

// const express = require('express')
// const app = express()
const port = 3000

//database connection
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');


(async ()=>{
    try{
        //Db connection
        await mongoose.connect('dbstring')
        console.log('DB connected successfully');

        //Express
        app.on("error", (err) => {
            console.log("ERROR:" ,err)
            throw err
        })

        const onListening = ()=> {
            console.log(`Listening on port ${port}`)
        }

        app.listen(port, onListening)

    } catch (error) {
        console.error("ERROR: ", err)
        throw err
    }
})()


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })