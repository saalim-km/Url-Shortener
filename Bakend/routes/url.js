import express from 'express';
import {postUrl,getUrl} from '../controllers/urlGen.js'

const router = express.Router();

//? post request for creating short url
router.post('/short',postUrl);

//? for redirecting
router.get('/:url',getUrl);


export default router;