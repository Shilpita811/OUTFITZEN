const express = require('express');
const { registerUser, loginUser } = require('../controllers/usercontroller');

const router = express.Router()
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
// router.route("/contact").post( isAuthenticatedUser, contactUs);




module.exports = router;
