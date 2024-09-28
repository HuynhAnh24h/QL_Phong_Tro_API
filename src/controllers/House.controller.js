const HouseModel = require('../models/House.model')
module.exports = {
    // CREATE
    createHouse: async (req,res) =>{
        try{
            const house = await HouseModel.create(req.body)
            return res.status(200).json({
                success: house ? true : false,
                data: house ? house : "No data"
            })
        }catch(err){
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }   
}