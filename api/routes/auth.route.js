import express from 'express'
import { Signup } from '../Controller/auth.controller.js';

const authRouter = express.Router();
authRouter.post("/signup",Signup);
export default authRouter