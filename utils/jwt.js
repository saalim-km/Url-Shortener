import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const generateToken = async(payload)=> {
    try {
        const token = jwt.sign(payload , SECRET_KEY , {expiresIn : '1hr'});
        return token;
    } catch (error) {
        console.error(error.message);
    }
}