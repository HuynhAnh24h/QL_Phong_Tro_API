const express = require('express')
const { createHouse, getAllHouse, updateHouse, deleteHouse } = require('../controllers/House.controller')
const { verifyAccessToken, isAdmin } = require('../middlewares/VerifyToken.middleware')
const router = express.Router()

router.post('/create-house',[verifyAccessToken,isAdmin],createHouse)
router.get('/list-house',[verifyAccessToken,isAdmin],getAllHouse)
router.put('/update-house/:hid',[verifyAccessToken,isAdmin],updateHouse)
router.delete('/delete-house/:hid',[verifyAccessToken,isAdmin],deleteHouse)

module.exports = router