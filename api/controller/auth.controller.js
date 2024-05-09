import User from '../models/user.model.js';
import{errorHandler} from '../utils/error.js'
import bcrypt from 'bcryptjs'
export const signup=async(req,res,next)=>{
    const{username,email,password,role}=req.body;
    if(!email || !password || !username || email===""||password===""||username===""){
        return errorHandler(400,"All fields are required");
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