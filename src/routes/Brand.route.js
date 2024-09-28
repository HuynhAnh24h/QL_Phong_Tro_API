const express = require('express')
const { verifyAccessToken, isAdmin } = require('../middlewares/VerifyToken.middleware')
const { createBrand, getList, updateBrand } = require('../controllers/Brand.controller')
const router = express.Router()

router.post('/create-brand',[verifyAccessToken,isAdmin], createBrand)
router.get('/list-brand',[verifyAccessToken, isAdmin], getList)
router.put('/update-brand/:bid',[verifyAccessToken,isAdmin],updateBrand)

module.exports = router