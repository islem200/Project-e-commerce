const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const{register, login, getCurrentUser 
   } = require('../controllers/userControllers')

router.post('/', register)
router.post('/login', login)
router.get('/me', auth, getCurrentUser)
module.exports = router