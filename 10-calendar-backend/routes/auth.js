/*
    User Router /Auth
    host+ /api/auth

*/


const {Router} = require('express');
const {check} = require('express-validator');
const {createUser, loginUser, revalidateToken} = require('../controllers/auth');
const {fieldValidator} = require('../middlewares/field-validator');
const {jwtValildator} = require('../middlewares/jwt-validator');
const router = Router();


router.post('/new', [ 
    check('name', 'Name is necessary').not().isEmpty().isLength({min:3}),
    check('email', 'Email is necessary').isEmail(), 
    check('password', 'Pass is necessary').isLength({min:6}), 
    fieldValidator
], 
    createUser)


router.post('/',[
    check('email', 'Email is necessary').isEmail(), 
    check('password', 'Pass is necessary').isLength({min:6}), 
    fieldValidator
], 
    loginUser)

router.get('/renew', 
    jwtValildator, 
    revalidateToken)

module.exports = router
