import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const baseURL = "https://api.unsplash.com"
const accessKey = process.env.JS_APP_UNSPLASH_ACCESS_KEY;
const headers = {
    Authorization: `Client-ID ${accessKey}`,
  };

export const getPhoto = async (req, res, next) => {
    try{
        const param = new URLSearchParams({
            page: req.params.page,
            per_page: 5
        })
        const {data} = await axios.get(`${baseURL}/photos/?${param}`, {headers});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({message: error.message})
    }
}