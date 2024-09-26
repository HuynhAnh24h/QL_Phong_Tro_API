const mongoose = require('mongoose')
const HouseSchema = mongoose.Schema({
    

},{
    timestamps: true,
    versionKey: false
})
module.exports = mongoose.model('House', HouseSchema)