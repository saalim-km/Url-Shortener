import express from 'express' ;
import dotenv from 'dotenv' ;
import connectToDatabase from './config/dbConfig.js';

//? loading env variables
dotenv.config()

//? Initialize Express App 
const app = express();

//? DB connection
connectToDatabase();

//? parsing data
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT ,()=> {
    console.log(`Server started running at ${PORT}`);
});