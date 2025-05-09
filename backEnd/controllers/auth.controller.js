import User from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const signup =async (req, res,next) => {
    const {username, email, password}=req.body
    const hashedPassword= bcryptjs.hashSync(password, 10)
    const newUser= new User({username,email,password:hashedPassword})
    try{
        await newUser.save()
        res.status(201).json({message: "User created successfully"})
    }catch(err){
        next(err)
    }
//    console.log(req.body)
}
export const signin =async (req, res,next) => {
    const {email, password}=req.body
    try{
        const validUser= await User.findOne({email})
        if(!validUser) 
            return next(errorHandler(404, 'User not found'))
        const validPasword= bcryptjs.compareSync(password, validUser.password)
        if(!validPasword) 
            return next(errorHandler(401, 'wrong credentials'))
        const token= jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const expiryDate=new Date(Date.now()+3600000)
        const {password: hashedPassword, ...rest}= validUser._doc
        res
        .cookie("access_token", token, {httpOnly: true},{expires:expiryDate})
        .status(200)
        .json(rest)
    } catch(err){
        next(err)
    }
}