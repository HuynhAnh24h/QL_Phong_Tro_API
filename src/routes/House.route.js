const express = require('express')
const router = express.Router()
const { createHouse } = require('../controllers/House.controller')
const {verifyAccessToken, isAdmin} = require('../middlewares/VerifyToken.middleware')

router.get('/create-house',createHouse)




module.exports = router