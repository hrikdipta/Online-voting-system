import User from '../models/user.model.js';
import{errorHandler} from '../utils/error.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const signup=async(req,res,next)=>{
    const{username,email,password,role}=req.body;
    if(!email || !password || !username || email===""||password===""||username===""){
        next(errorHandler(400,"All fields are required"));
    }
    if(role==='admin'){
        next(errorHandler(400,"admin signup is not allowed")) 
    }
    const hashedPassword=bcrypt.hashSync(password,10);
    try {
        const user=await User.create({
            username,
            email,
            password: hashedPassword,
            role:role===null ? voter : role,
        })
        return res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}
export const login=async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email || !password || email===""||password===""){
        next(errorHandler(400,"All fields are required"));
    }
    try {
        const user=await User.findOne({email:email})
        if(!user){
            next(errorHandler(404,"User not found"));
        }
        const isMatch=bcrypt.compareSync(password,user.password);
        if(!isMatch){
            next(errorHandler(400,"Invalid credentials"));
        }
        const token=jwt.sign({
            id:user._id,
            role:user.role,
        },process.env.JWT_SECRET,{expiresIn:'1d'});
        res.cookie('token',token,{httpOnly:true});
        return res.status(200).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            role:user.role,
        });
    } catch (error) {
        next(error);
    }
}