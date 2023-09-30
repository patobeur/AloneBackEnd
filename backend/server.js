const express = require("express");
const connectDB = require("./config/db.js");

const dotenv = require("dotenv").config();

// db connect
connectDB();

// app
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use( "/post", require("./router/postRouter.js"));

// Lancer le serveur
app.listen(process.env.port, () => {
    console.log('le serveur est up ! sur le port ' + process.env.port);
    console.log('version:'+process.env.version)
    console.log(process.env.npm_package_name)
    console.log(process.env.HOME)
});