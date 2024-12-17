import dotenv from 'dotenv';
import {nanoid} from 'nanoid';
import {validateUrl} from '../utils/url';
import Url from '../models/url';

//? loading env variables
dotenv.config();


const urlId = nanoid();
export const postUrl = async (req,res)=> {
    try {
        const {origUrl} = req.body;
        const base = process.env.BASE;
        if(validateUrl(origUrl)) {
                let url = await Url.findOne({origUrl});

                if(url) {
                    res.json(url);
                }else {
                    const shorturl = `${base}/${urlId}`;

                    const newUrl = new Url ({
                        urlId : urlId,
                        origUrl : origUrl,
                        shortUrl : shorturl,
                    })
                    const savingNewUrl  = await newUrl.save();
                    if(savingNewUrl) {
                        res.json(shorturl)
                    }
                }
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).json({'error' : 'an error occured please try again later'});
    }
}