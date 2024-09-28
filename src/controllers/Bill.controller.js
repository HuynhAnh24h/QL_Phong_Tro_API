const BillModel = require('../models/Bill.model')
module.exports = {
    // CREATE
    createBill: async (req,res)=>{
        try{
            
        }catch(err){
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
}