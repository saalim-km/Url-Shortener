import express from 'express';
import {signup, signUpPage} from '../controllers/urlGen.js'
const userRouter = express.Router()





//? userSignup
userRouter.get('/signup',signUpPage)
userRouter.post('/signup',signup)

export default userRouter;