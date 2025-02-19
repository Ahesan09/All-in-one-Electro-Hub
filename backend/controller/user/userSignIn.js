const bcrypt = require('bcryptjs')
const userModel = require("../../models/userModel")
const jwt = require('jsonwebtoken');
const { response } = require('express');

async function userSignInController(req,res) {
    try{
             
            const{email,password} = req.body
            const user = await userModel.findOne({email})
            if(!email){
                throw new Error("Please Provide email")
            }
            if(!password){
                throw new Error("Please Provide Password")
            }
        

            if(!user){
                throw new Error("User not found")
            }
            const checkPassword = await bcrypt.compare(password,user.password)
            console.log("checkPassword",checkPassword)

            if(checkPassword){
                const tokenData = {
                    _id: user._id,
                    email : user.email,
                }
                 const token =  await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });
                 const tokenOption = {
                    httpOnly: true,
                    secure:true
                 }
                 res.cookie("token",token,tokenOption).json({
                    message:"Login Successfully",
                    data: token,
                    success: true,
                    error: false
                 })
            }
            else{
                throw new Error("Invalid Password")
            }

    }   
    catch(err){
        res.json({
            message: err.message || err ,
            error: true,
            success: false,
        })
    }
}
module.exports = userSignInController