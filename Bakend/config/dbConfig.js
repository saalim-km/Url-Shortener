import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); //? loading env variables

const MONGO_URI = process.env.MONGO_URI;

const connectToDatabase = async ()=> {
    try {
        const connection = await mongoose.connect(MONGO_URI);
        console.log('database connect aayi');
    } catch (error) {
        console.error('database connection failed',error.message);
        process.exit(1);
    }
}

export default connectToDatabase;