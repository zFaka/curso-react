const {validationResult} = require("express-validator");
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const {generateJWT} = require("../helpers/jwt");



const createUser = async(req, res) => {


    const {email, password} = req.body;



    try{

        let user = await User.findOne({email})



        if(user){
            return res.status(400).json({
                ok:false, 
                msg:'Exist a user with this email'
            })
        }


        user = new User(req.body);


        // Encrypt Pass
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)


        await user.save()


        // Generate JWT
        const token = await generateJWT(user.id, user.name);


        res.status(201).json({
            ok: true, 
            uid: user.id, 
            name: user.name, 
            token
        })


    } catch (err) {

        console.log(err) 

        res.status(500).json({
            ok:false, 
            msg:'Please contact with the admin'
        })
    }
}



const loginUser = async(req, res) => {


    const {email, password} = req.body;



    try{

        const user = await User.findOne({email})



        if(!user){
            return res.status(400).json({
                ok:false, 
                msg:"Doesn't exist a user with this email"
            })
        }

        //Validate Pass
        const validPass = bcrypt.compareSync(password, user.password);

        if (!validPass) {
            return res.status(400).json({
                ok:false, 
                msg:'This is not the password'})}


        // Generate JWT
        const token = await generateJWT(user.id, user.name);


        res.json({
            ok:true, 
            uid:user.id, 
            name:user.name, 
            token
        })


    } catch (err) {

        console.log(err) 

        res.status(500).json({
            ok:false, 
            msg:'Please contact with the admin'
        })
    }
}



const revalidateToken = async(req, res) => {

    const {uid, name} = req;
    const token = await generateJWT(uid, name);

    res.json({
        ok: true, 
        token
    })
};


module.exports = {
    createUser, 
    loginUser, 
    revalidateToken, 
}
