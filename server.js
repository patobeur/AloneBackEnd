const express = require("express");
const connectDB = require("./backend/config/db.js");

const dotenv = require("dotenv").config();

const path = require("path");
const { resourceLimits } = require("worker_threads");

// db connect
// connectDB();

// app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/post", require(__dirname+"/backend/router/postRouter.js"));
const pathh = path.join(__dirname,"/public");

app.use(express.static(pathh));
// mes routes
app.use("/",require("./backend/router/getRouter.js"));

// Lancer le serveur
app.listen(process.env.port, () => {
    console.log("le serveur est up ! sur le port " + process.env.port);
    console.log('<'+process.env.npm_package_name+'> '+'version:' + process.env.version,'root:'+process.env.HOME);
}); 