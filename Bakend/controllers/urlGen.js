import dotenv from 'dotenv';
import {nanoid} from 'nanoid';
import {validateUrl} from '../utils/url.js';
import Url from '../models/url.js';
import url from '../models/url.js';

//? loading env variables
dotenv.config();


const urlId = nanoid();
export const postUrl = async (req,res)=> {
    try {
        console.log('hi nigga');
        const {origUrl} = req.body;
        const base = process.env.BASE;
        if(validateUrl(origUrl)) {
                let url = await Url.findOne({origUrl});

                if(url) {
                    res.json('url already shorted try another one');
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


export const getUrl = async (req,res)=> {
    try {
        console.log('hi im here')
        const {url} = req.params;
        console.log(req.params)

        const urlDetails = await Url.findOne({ urlId : url });
        console.log(urlDetails)

        if(urlDetails) {
            await Url.updateOne(
                {
                    urlId : url
                },
                {$inc : {clicks : 1}}
            );
            return res.redirect(urlDetails.origUrl)
        }else {
            res.status(301).json('url not found');
        }
    } catch (error) {
        console.error(error.message);
    }
}