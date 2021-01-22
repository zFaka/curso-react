const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => {

    return new Promise((resolve, reject) => {

        const payload = {uid, name};

        //jwt.sign(payload, secretOrPrivateKey)
        jwt.sign(
            payload,
            process.env.SECRET_JWT_SEED, 
            {expiresIn:'12h'},
            (err, token) => {

                if (err) {
                    console.log(err) 
                    reject('Cant generate Token')}

                resolve(token)
            }
        )
    }) 
};

module.exports = {
    generateJWT
}
