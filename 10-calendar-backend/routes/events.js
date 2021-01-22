// Tienen que pasar la validacion del token
const moment = require('moment');
const {Router} = require('express');
const {getEvent, createEvent, updateEvent, deleteEvent} = require('../controllers/events');
const router = Router();
const {jwtValildator} = require('../middlewares/jwt-validator');
const {fieldValidator} = require('../middlewares/field-validator');
const {check} = require('express-validator');
const {isDate} = require('../helpers/isDate');



//All has to pass through the JWT validation
// 'use' is for can use a middlewares in all functions of 'router'
router.use(jwtValildator)


// obtener eventos
router.get('/', [
    fieldValidator
], 
    getEvent)


// Crear eventos
router.post('/', [
    check('title', 'Title is necessary').not().isEmpty(), 
    check('start', 'Start date is necessary').custom(isDate), 
    check('end', 'End date is necessary').custom(isDate), 
    fieldValidator
], 
    createEvent)


// Update eventos
router.put('/:id', [

    fieldValidator
], 
    updateEvent)


// Delete eventos
router.delete('/:id', [

    fieldValidator
], 
    deleteEvent)



module.exports = router 
