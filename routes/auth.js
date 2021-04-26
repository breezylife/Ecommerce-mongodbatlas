const express = require('express')
const router = express.Router()

const { signup, signin, signout, requireSignin } = require('../controllers/auth')
const { userSignupValidator } = require('../validator')

router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);
// router.get('/signup', (req, res) => {
//     res.send("hello from node hay");
// });

module.exports = router;