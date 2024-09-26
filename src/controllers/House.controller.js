const HouseModel = require('../models/House.model')
module.exports = {
    // CREATE
    createHouse: async (req,res) =>{
        try{
            const name = 'create House'
            return res.status(200).json({
                success: true,
                message: name
            })

        }catch(err){
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    },

    // GET ALL
    getAllHouse: async (req,res) =>{
        try{

        }catch(err){
            return res.status(200).json({
                success: false,
                message: err.message
            })
        }
    },

    // UPDATE
    updateHouse: async (req,res) =>{
        try{

        }catch(err){
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    },

    // DELETE
    deleteHouse: async (req,res) =>{
        try{

        }catch(err){
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }
    },
}