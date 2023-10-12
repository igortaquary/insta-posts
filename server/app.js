import axios from 'axios';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())

app.get("/", (request, response) => {
  response.json({ message: "Hey! This is your server response!" });
});

app.get("/getsat", async (request, response) => {
  try {
    console.log(request.query)
    const code = request.query.code
  
    if(!code) {
      throw new Error("Code is missing")
    }
  
    const clientId = "623022389728995"
    const clientSecret = "4053837fec543e7997535af4ae345812";
    const redirectUri = "https://localhost:3000/redirect"
  
    const form = new FormData();
    form.append("code", code);
    form.append("client_secret", clientSecret);
    form.append("client_id", clientId);
    form.append("redirect_uri", redirectUri);
    form.append("grant_type", "authorization_code");

    console.log("iniciando requisiçao para instagram...")

    const res = await axios.post('https://api.instagram.com/oauth/access_token', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    const json = res.data

    console.log(json)

    const shortAccessToken = json.access_token
    
    response.status(200)
    response.json({
      access_token: shortAccessToken
    })
  } catch (error) {
    console.error(error)
    response.status(500);
    response.json({
      message: error.message,
      error: error
    });
    //throw error 
  }
});

export default app;