//importing package

import express from "express";

//initializing express app

const app = express();
const port = process.env.PORT || 3000;

//get request from http://localhost:3000/

//console.log(app);

app.get("/", (req, res) => {
    console.log("🚀 ~ file: server.mjs:7 ~ app.get ~ req:" + req);
    res.send({message: "Hello World!, by laraib merchant"});
});

//get request from http://localhost:3000/name/:myName

app.get("/name/:myName", (req, res) => {
    console.log("🚀 ~ file: server.mjs:7 ~ app.get ~ req:" + req);
    const name = req.params.myName;
    res.send({message: `Hello World!, by ${name}`});
});

//app is listening from here

app.listen(port, () => {
    console.log("App is listening on port: " + port)
});

