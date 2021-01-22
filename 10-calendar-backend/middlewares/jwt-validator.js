const jwt = require('jsonwebtoken');


const jwtValildator = (req, res, next) => {

    // x-token headers
    const token = req.header('x-token');

    if (!token) {
        return res.status(400).json({
            ok:false, 
            msg:'Petition doesnt has a token'})}


    try {

        const {uid, name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED);

        req.uid  = uid
        req.name = name 

    } catch (error) {
        return res.status(401).json({
            ok:false, 
            msg:'Token doesnt valid'
        })}

    next()
};

module.exports = {
    jwtValildator, 
}
