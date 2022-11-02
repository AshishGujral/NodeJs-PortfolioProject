const express = require("express");
const router = express.Router();
const bodyparse = require("body-parser");   
const { Router } = require("express");

const app = express();
//app.use(express.static("public"));
app.use(express.static(__dirname));

app.use('/static', express.static(__dirname + '/public'));
//app.use(express.static('public'));
//app.use(express.static('./public/css'));
app.use(bodyparse.urlencoded({extended:true}));
app.set('view engine','pug');
//app.set("views", path.join(__dirname, "views"));
app.locals = require ('./data.json');
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/project:id",(req,res)=>{
    console.log("id",req.params.id);
    id= req.params.id;
    parseInt(id);
    res.render("project");
});
app.get("/about",(req,res)=>{
    res.render("about");
});


app.locals = require ('./data.json');
app.listen(3000,()=>{
    console.log("The application is running on localhost:3000!");
});