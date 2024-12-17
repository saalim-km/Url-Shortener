import express from 'express';
import {nanoid} from 'nanoid';
import Url from '../models/url.js';
import {validateUrl} from '../utils/url.js';
import {postUrl} from '../controllers/urlGen.js'

const router = express.Router();

router.post('/short',postUrl);