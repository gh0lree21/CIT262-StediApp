const express = require('express');
const app = express(); 

app.get("/", (req, res)=>{
    res.send("Welcome to my backend application");
});

app.get("/grant", (req, res)=>{
    res.send("Hello Grant");
})

app.listen(3000, ()=>{
    console.log("Listening");
})