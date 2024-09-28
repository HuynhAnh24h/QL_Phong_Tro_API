const mongoose = require('mongoose')
const HouseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        index: true  
    }
},{
    timestamps: true
})
module.exports = mongoose.model('House', HouseSchema)