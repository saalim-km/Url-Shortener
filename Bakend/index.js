import express from 'express' ;
import dotenv from 'dotenv' ;
import connectToDatabase from './config/dbConfig.js';
import router from './routes/url.js';

//? loading env variables
dotenv.config()

//? Initialize Express App 
const app = express();

//? DB connection
connectToDatabase();

//? parsing data
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//? setting base route
app.use('/',router);

const PORT = process.env.PORT;
app.listen(PORT ,()=> {
    console.log(`Server started running at ${PORT}`);
});