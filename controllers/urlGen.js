import dotenv from 'dotenv';
import {nanoid} from 'nanoid';
import {validateUrl} from '../utils/url.js';
import Url from '../models/url.js';
import User from '../models/user.js'
import {hashPassword} from '../utils/hash.js'

//? loading env variables
dotenv.config();


export const homePage = async(req,res)=> {
    try {
        res.render('home');
    } catch (error) {
        console.error(`error in homPage controller ${error.message}`)
    }
}

export const signUpPage = async(req,res)=> {
    try {
        res.render('signup');
    } catch (error) {
        console.error(error.message);
    }
}

export const postUrl = async (req,res)=> {
    try {
        console.log('aa keri');
        console.log(req.body);
        
        const urlId = nanoid(5);
        const {origUrl} = req.body;
        const base = process.env.BASE;
        console.log(origUrl , base)

        if(validateUrl(origUrl)) {
                let url = await Url.findOne({origUrl});

                if(url) {
                    res.json({success : false , message : 'Url already shortened'});
                }else {

                    const shorturl = `${base}/${urlId}`;

                    const newUrl = new Url ({
                        urlId : urlId,
                        origUrl : origUrl,
                        shortUrl : shorturl,
                    })
                    
                    const savingNewUrl  = await newUrl.save();
                    console.log(shorturl);

                    if(savingNewUrl) {
                        res.status(201).json({success : true , shortUrl : shorturl});
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


export const signup = async(req,res)=> {
    try {
        console.log('ivda indee')
        console.log(req.body);
        // const {name , email , password} = req.body;
        // const userExists = await User.findOne({email : email});
        // if(userExists) {
        //     res.json({success : false , message : 'An account with this email already exists'});
        // }else {
        //     const securePass = await hashPassword(password);
        //     const userData = new User({
        //         name : name , 
        //         email :  email , 
        //         password : securePass,
        //     });
        //     console.log(securePass);
        //     const savedData = await userData.save();
        //     console.log(savedData);
        //     res.status(200).json({success : true , savedData});
        // }
    } catch (error) {
        console.error(error.message)
    }
}