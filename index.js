import express from 'express' ;
import dotenv from 'dotenv' ;
import connectToDatabase from './config/dbConfig.js';
import router from './routes/url.js';
import userRouter from './routes/user.js';


//? loading env variables
dotenv.config()

//? Initialize Express App 
const app = express();

//? DB connection
connectToDatabase();

//? setting view engine as ejs
app.set('view engine','ejs');

//? parsing data
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//? serving static files
app.use(express.static('public'))

//? setting base route
app.use('/link',router);
app.use('/',router);
app.use('/u', userRouter);

const PORT = process.env.PORT;
app.listen(PORT ,()=> {
    console.log(`Server started running at ${PORT}`);
});