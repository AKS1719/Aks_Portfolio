const express = require("express");
const path = require("path");
const app = express();

app.use('/dashboard',express.static("Dashboard"));

app.set('view engine',"pug")
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    res.status(200).render("index");
});


app.listen(80,()=>{
    console.log("app listnening on port 80");
});