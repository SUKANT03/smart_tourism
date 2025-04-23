const express = require("express")
const mongoose =require('mongoose')
const cors = require("cors")
const visitorsModel = require('./models/visitor')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/visitors");

app.post("/login",(req, res) =>{
    const{email, password}= req.body;
    visitorsModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password == password){
                res.json("Success")
            } else{
                res.json("The Password is Incorrect")
            }
        } else{
            res.json("No Record existed ")
        }
    })
})
app.post('/details',(req, res) => {
    visitorsModel.create(req.body)
    .then(visitors =>res.json(visitors))
    .catch(err => res.json(err))
})
app.listen(3001,()=> 
    console.log("server is running")
)
