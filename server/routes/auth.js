const express = require("express");
const { register, login, getMe, logout } = require("../controllers/auth");
const { protect } = require("../middleware/auth");


const router = express.Router();

router.get('/getMe', protect, getMe);
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
module.exports = router;
