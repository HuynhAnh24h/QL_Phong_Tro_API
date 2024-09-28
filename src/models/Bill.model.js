const mongoose = require('mongoose')
const BillSchema = mongoose.Schema({
    
},{
    versionKey: false,
    timestamps: true
})
module.exports = mongoose.model('Bill', BillSchema)