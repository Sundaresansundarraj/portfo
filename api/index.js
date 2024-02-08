const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 800;
const cors = require("cors");
app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017/office",{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() =>{
   console.log("connect aachi") 
}).catch((err)=>{
    console.log("atho thappachi",err)
})

app.listen(port, ()=>{
    console.log("server 800 port la run aavuthu")
})