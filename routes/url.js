import express from 'express';
import {postUrl, getUrl, homePage, signup, signUpPage} from '../controllers/urlGen.js'

const router = express.Router();

//? post request for creating short url
router.post('/short',postUrl);

//? for redirecting
router.get('/link/:url',getUrl);

//? base url
router.get('/',homePage)



export default router;