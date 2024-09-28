const express = require('express')
const { createHouse } = require('../controllers/House.controller')
const router = express.Router()

router.post('/create-house',createHouse)

module.exports = router