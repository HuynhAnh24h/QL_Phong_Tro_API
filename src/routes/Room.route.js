const express = require('express')
const router = express.Router()
const {verifyAccessToken, isAdmin} = require('../middlewares/VerifyToken.middleware')
const { createRoom, getAllRoom, updateRoom, deleteRoom, getRoom } = require('../controllers/Room.controller')

router.post('/create-room',[verifyAccessToken,isAdmin],createRoom)
router.get('/get-all-rooms',[verifyAccessToken],getAllRoom)
router.put('/update-room/:rid',[verifyAccessToken, isAdmin], updateRoom)
router.delete('/delete-room/:rid',[verifyAccessToken,isAdmin], deleteRoom)
router.get('/get-one-room/:rid',[verifyAccessToken], getRoom)
module.exports = router