const mongoose = require('mongoose')

const visitorsSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String,
    contact:String,
    password:String
})

const visitorsModel = mongoose.model("visitor",visitorsSchema)
module.exports = visitorsModel