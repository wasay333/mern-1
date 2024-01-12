import User from "../Models/user.model.js"
import bycryptjs from "bcrypt"
export const Signup = async(req, res, next)=>{
const {username, email, password}= req.body;
const hashedPassword = bycryptjs.hashSync(password, 10);
const newUser = new User({username, email, password:hashedPassword});
try{
    await newUser.save();
    res.status(201).json('User created successfully!');
}catch(error){
// res.status(500).json(error.message);
next(error);
}
}
