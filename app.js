
const express = require("express");
const registerHelper = require("hbs");
const app = express();
const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";
const path = require("path");
require("./db/conn");
const Register = require("./models/registers")
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE;


app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.get("/",(req,res) =>{
//     res.send("Welcome To the Form");
// })


// console.log(path.join(__dirname,"/for"));
// const staticPath =path.join(__dirname,"/for");
// app.use(express.static(staticPath));

app.set("view engine","hbs");
app.get("/",(req,res)=>
{
    res.render("register");
});
app.get("/register",(req,res)=>
{
    res.render("register");
});

//Create a new user in our data base
app.post("/register",async(req,res) =>{
    try{
        // console.log(req.body.name);
        // res.send(req.body.name);

        const registeredemployee = new Register({
            name:req.body.name,
            address:req.body.address,
            mobile:req.body.mobile,
            email:req.body.email
        })

        const registered = await registeredemployee.save();
        res.status(201).render("register");
    }catch(err){
        res.status(400).send(err);
    }
})


app.listen(port,() =>{
    console.log(`Running At http://${hostname}:${port}`);
})